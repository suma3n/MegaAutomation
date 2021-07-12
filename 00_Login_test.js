Feature('Login to Mega');

Scenario('Launch Mega URL page', ({ I }) => {

    I.amOnPage('https://mega.nz');
    I.see('Before you continue');

});


Scenario('Accept Cookies', ({ I }) => {

    I.see('Accept Cookies');
    I.click('Accept Cookies');
    I.wait(5);

});

Scenario('Login', ({ I }) => {

    I.see('Login');
    I.click('Login');
    I.wait(5);

    I.see('Your Email');
    I.appendField('#login-name2', 'suma.nallav@gmail.com');
    
    I.see('Password');
    I.appendField('#login-password2', 'Winter@123');
    

    I.see('Log in');
    I.click('Log in');
    I.wait(10);


});