import Vue from "vue";
import * as SurveyVue from "survey-vue";

function renderSurvey(survey, element) {
  var vueContainer = document.createElement("div");
  element.appendChild(vueContainer);
  var app = new Vue({
    el: vueContainer,
    template: "<survey :survey='survey' />",
    data: {
      survey: survey
    }
  });
  survey.onAfterRenderSurvey.fire();
}
function getPosition(el) {
  var res = 0;
  while (el) {
    if (el.tagName == "BODY") {
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
      res += el.offsetTop - yScroll + el.clientTop;
    } else {
      res += el.offsetTop - el.scrollTop + el.clientTop;
      res += el.offsetTop - el.scrollTop + el.clientTop;
    }
    el = el.offsetParent;
    
  }
  return res;
}
function getElementOffset(el, rootEl) {
  var rootElTop = getPosition(rootEl);
  var elTop = getPosition(el);
  var res = Math.abs(rootElTop - elTop);
  return res + el.offsetHeight;
}
function isBottomRow(el) {
  const className = "sv_row";
  var isRow = !!el.className && el.className.indexOf(className) > -1;
  if (!isRow) return false;
  return el.getElementsByClassName(className).length == 0;
}
function getNextElement(el) {
  if (!el) return null;
  if (!!el.nextElementSibling) return el.nextElementSibling;
  return getNextElement(el.parentElement);
}
function findElementOnBreak(element, height) {
  var curElement = element;
  var bottomRowCounter = 0;
  while (!!curElement) {
    var isCurElementBottomRow = isBottomRow(curElement);
    if (isCurElementBottomRow) {
      bottomRowCounter++;
    }
    if (
      curElement.offsetHeight > 0 &&
      getElementOffset(curElement, element) > height
    ) {
      if (isCurElementBottomRow) {
        return bottomRowCounter > 1 ? curElement : getNextElement(curElement);
      }
      if (!curElement.firstElementChild) return curElement;
      curElement = curElement.firstElementChild;
    } else {
      curElement = getNextElement(curElement);
    }
  }
  return curElement;
}
function cloneAttributes(element, sourceNode) {
  var attr;
  var attributes = Array.prototype.slice.call(sourceNode.attributes);
  while ((attr = attributes.pop())) {
    element.setAttribute(attr.nodeName, attr.nodeValue);
  }
}
function doElementBreak(el, firstChild) {
  var parentEl = el.parentElement;
  var newParent = document.createElement(parentEl.tagName);
  cloneAttributes(newParent, parentEl);
  var childIndex = Array.prototype.indexOf.call(parentEl.children, el);
  if (childIndex < 0) return null;
  if (!!firstChild) {
    newParent.appendChild(firstChild);
    childIndex++;
  }
  var movedChildren = [];
  for (var i = childIndex; i < parentEl.children.length; i++) {
    movedChildren.push(parentEl.children[i]);
  }
  for (var i = 0; i < movedChildren.length; i++) {
    newParent.appendChild(movedChildren[i]);
  }
  return newParent;
}
function doPageBreak(rootElement, el) {
  var newRoot = null;
  while (el != rootElement) {
    var parentEl = el.parentElement;
    newRoot = doElementBreak(el, newRoot);
    if (!newRoot) return newRoot;
    el = parentEl;
  }
  return newRoot;
}
function createSurveyWithPrintedPages(survey, surveyElement, width, height) {
  var json = survey.toJSON();
  var printedSurveyElement = document.createElement("div");
  printedSurveyElement.className = "printed-survey-element";
  surveyElement.appendChild(printedSurveyElement);
  surveyElement.style.width = width + "px";

  var printedSurvey = new SurveyVue.Model(json);

  printedSurvey.onAfterRenderSurvey.add(function(survey, options) {
    var rootElement = printedSurveyElement.parentElement;
    var curElement = printedSurveyElement;
    setTimeout(function() {
      //debugger;
      while (
        !!printedSurveyElement &&
        printedSurveyElement.offsetHeight > height
      ) {
        var el = findElementOnBreak(printedSurveyElement, height);
        printedSurveyElement.className += " printedStyle";
        if (!el) break;
        printedSurveyElement = doPageBreak(printedSurveyElement, el);
        /*
          var separator = document.createElement("div");
          separator.innerHTML = "<hr>";
          rootElement.appendChild(separator);
          */
        rootElement.appendChild(printedSurveyElement);
      }
    }, 0);
  });
  printedSurvey.data = survey.data;
  printedSurvey.mode = "display";
  printedSurvey.isSinglePage = true;
  printedSurvey.showProgressBar = "none";
  var questions = printedSurvey.getAllQuestions();
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].getType() == "paneldynamic") {
      questions[i].renderMode = "list";
    }
  }

  renderSurvey(printedSurvey, printedSurveyElement);
  // printedSurvey.render();
  return printedSurvey;
}
function showPrintedSurvey(survey, el, width, height) {
  createSurveyWithPrintedPages(survey, el, width, height);
}

export default function saveSurveyToPdf(fileName, survey, width, height) {
  var printedSurveyDiv = document.createElement("div");
  var invisibleDiv = document.createElement("div");
  invisibleDiv.appendChild(printedSurveyDiv);
  document.body.appendChild(invisibleDiv);

  printedSurveyDiv.className = "printed-survey-div";
  showPrintedSurvey(survey, printedSurveyDiv, width, height);

  invisibleDiv.style.position = "absolute";
  invisibleDiv.style.opacity = 0;
  setTimeout(function() {
    var elementsByPages = printedSurveyDiv.getElementsByClassName(
      "printedStyle"
    );
    var currentElement = 0;
    var doc = new jsPDF();
    var margin = {
      left: 10,
      top: 10
    };
    var options = {
      background: "#ffffff"
    };
    var renderSurverToPdf = function() {
      doc.addHTML(
        elementsByPages[currentElement],
        margin.left,
        margin.top,
        options,
        function() {
          if (currentElement < elementsByPages.length - 1) {
            currentElement++;
            doc.addPage();
            renderSurverToPdf();
          } else {
            doc.save(fileName);
            document.body.removeChild(invisibleDiv);
          }
        }
      );
    };
    renderSurverToPdf();
  }, 100);
}
