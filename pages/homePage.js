module.exports =function(){

    let input_first = element(by.model('first'));
    let input_second = element(by.model('second'));
    let go_addition =element(by.css('[ng-click="doAddition()"]'));

    this.get=function(url){
        browser.waitForAngularEnabled(true);
        browser.get(url);

    };

    this.enterFirstNumber=function(firstNo){
        input_first.sendKeys(firstNo);

    };
    this.enterSecondNumber=function(secondNo){
        input_second.sendKeys(secondNo);

    };

    this.clickGoAddition=function(){
        go_addition.click();

    };
    this.verifyResult=function(expected){
        result =element(by.css('.ng-binding'));
        expect(result.getText()).toEqual(expected);

    };

  
};
