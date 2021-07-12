Feature('File Operations');

Scenario('Create a File', ({ I }) => {

    //To do
    I.rightClick('#bodyel');

    I.see('New Text File');
    I.click('New Text File');
    I.wait(5);

    I.fillField('.txt','a');
    I.see('Create');
    I.click('Create');
    I.wait(5);

    I.appendField('.CodeMirror textarea','megatesting');
    I.see('Save');
    I.click('Save');
    I.wait(10);

    I.click('.close-btn > .sprite-fm-mono');
    I.wait(5);

    
});


Scenario('Delete the File', ({ I }) => {

    //To do
    I.click('.data-block-bg > .text');
    I.wait(5);
    I.click('.file-settings-icon > .sprite-fm-mono');
    I.wait(5);

    I.see('Remove');
    I.click('Remove');
    I.wait(5);

    I.see('Yes');
    I.click('Yes');
    I.wait(5);

});

Scenario('Restore the File from Rubbish Bin', ({ I }) => {

   //To do
   I.click('.btn-myfiles:nth-child(5)');
   I.click('.data-block-bg > .text');
   I.wait(5);
   I.click('.file-settings-icon > .sprite-fm-mono');
   I.wait(5);

   I.see('Restore');
   I.click('Restore');
   I.wait(5);

});