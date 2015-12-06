describe('TODO List', function() {
  var todoInput = element(by.model('IndexCtrl.todoText'));
  var text = 'Buy Milk';
  var list = element.all(by.repeater('item in IndexCtrl.todoList.items'));
  var first = list.get(0);

  beforeEach( function(){
    browser.get('http://localhost:3000');
    todoInput.sendKeys(text).sendKeys(protractor.Key.ENTER);
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todo-ify');
  });
  it('can add a todo item', function() {
    expect(first.getText()).toContain(text);
  });
  it('can delete a todo item', function() {
    expect(list.getText()).toContain(text + ' x');
    first.element(by.className('del-icon')).click();
    expect(list.getText()).not.toContain(text + ' x');
  });
  it('can edit a todo item', function() {
    first.element(by.className('text')).click();
    var editBox = element(by.className('editable-input'));
    editBox.sendKeys('Buy Bread').sendKeys(protractor.Key.ENTER);
    expect(list.getText()).not.toContain(text + ' x');
  });
});
