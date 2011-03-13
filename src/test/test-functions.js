/* ==============================================================================
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
function click(selector) {
  $(selector).click();
}
function value(selector) {
  var elem = $(selector)
  if (elem.is("input")) {
    return elem.val()
  } else {
    return elem.text()
  }
}

$.fn.withText = function(text) {
  return this.filter(function() {
    return $(this).text() == text.toString()
  })
}

function assertHasValues(selector, expectedArray, comment) {
  same($.map(cal().find(selector), function (elem) {
    return $(elem).text()
  }), $.map(expectedArray, function(i) {
    return i.toString()
  }), comment)
}
ok = QUnit.ok