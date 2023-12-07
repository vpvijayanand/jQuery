// jQuery Element Selector
var elementSelectorResult = $('div').text();
$('#element-selector-result').text('Element Selector Result: ' + elementSelectorResult);

// jQuery Class Selector
var classSelectorResult = $('.my-class').text();
$('#class-selector-result').text('Class Selector Result: ' + classSelectorResult);

// jQuery ID Selector
var idSelectorResult = $('#my-id').text();
$('#id-selector-result').text('ID Selector Result: ' + idSelectorResult);

// jQuery Attribute Selector
var attributeSelectorResult = $('[data-custom="value"]').text();
$('#attribute-selector-result').text('Attribute Selector Result: ' + attributeSelectorResult);

// jQuery Descendant Selector
var descendantSelectorResult = $('section.demo-section p').text();
$('#descendant-selector-result').text('Descendant Selector Result: ' + descendantSelectorResult);

// jQuery Child Selector
var childSelectorResult = $('ul > li').text();
$('#child-selector-result').text('Child Selector Result: ' + childSelectorResult);

// jQuery Next Sibling Selector
var nextSiblingSelectorResult = $('p + p').text();
$('#next-sibling-selector-result').text('Next Sibling Selector Result: ' + nextSiblingSelectorResult);

// jQuery Adjacent Selector
var adjacentSelectorResult = $('div ~ ul').text();
$('#adjacent-selector-result').text('Adjacent Selector Result: ' + adjacentSelectorResult);

// jQuery First Element Selector
var firstElementSelectorResult = $('p:first').text();
$('#first-element-selector-result').text('First Element Selector Result: ' + firstElementSelectorResult);

// jQuery Last Element Selector
var lastElementSelectorResult = $('li:last').text();
$('#last-element-selector-result').text('Last Element Selector Result: ' + lastElementSelectorResult);

// jQuery Even Elements Selector
var evenSelectorResult = $('li:even').text();
$('#even-selector-result').text('Even Elements Selector Result: ' + evenSelectorResult);

// jQuery Odd Elements Selector
var oddSelectorResult = $('li:odd').text();
$('#odd-selector-result').text('Odd Elements Selector Result: ' + oddSelectorResult);

// jQuery Not Selector
var notSelectorResult = $('li:not([data-custom="value"])').text();
$('#not-selector-result').text('Not Selector Result: ' + notSelectorResult);

// jQuery Contains Selector
var containsSelectorResult = $('p:contains("class")').text();
$('#contains-selector-result').text('Contains Selector Result: ' + containsSelectorResult);

// jQuery Visible Selector
var visibleSelectorResult = $('p:visible').text();
$('#visible-selector-result').text('Visible Selector Result: ' + visibleSelectorResult);

// jQuery Hidden Selector
var hiddenSelectorResult = $('p:hidden').text();
$('#hidden-selector-result').text('Hidden Selector Result: ' + hiddenSelectorResult);
