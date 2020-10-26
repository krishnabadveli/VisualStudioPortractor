//import homePage2 from homePage
let homePage=require('../pages/homePage')

let homePage2=new homePage();
describe('demo calculator tests',function(){
    var homePage2=new homePage();
    it('addition',function(){
        homePage2.get('http://juliemr.github.io/protractor-demo/');
       // browser.waitForAngularEnabled(true);
        //browser.get('http://juliemr.github.io/protractor-demo/');

      //  var input = element(by.model('first'));
//react2.clickGoAddition
       // browser.sleep(2000)
       //input.sendKeys('2');
       
       homePage2.enterFirstNumber('5');
       homePage2.enterSecondNumber('5');
       homePage2.clickGoAddition();
       homePage2.verifyResult('10');

       homePage2.enterFirstNumber('2');
       homePage2.enterSecondNumber('2');
       homePage2.clickGoAddition();
       homePage2.verifyResult('10');
       // var input = element(by.model('second'));
        //input.sendKeys('2');

        //browser.sleep(3000)
        //element(by.css('[ng-click="doAddition()"]')).click();
        //browser.sleep(3000);
        //result =element(by.cssContainingText('.ng-binding','4'));
        //expect(result.getText()).toEqual('4');
        //browser.sleep(3000);
        
    });
    // it('addition',function(){

    // });
    // it('addition',function(){

    // });
    // it('addition',function(){

    // });
    // it('addition',function(){

    // });

});