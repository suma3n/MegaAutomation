Feature('Linux Distributions');

Scenario('Verify All Linux Distributions available', ({ I }) => {

    //Expected values
    const LinuxDistributions = ["Arch Linux", "CentOS 7.0", "CentOS 8", "Debian 10.0", "Debian 8.0", "Debian 9.0", "elementary OS Juno", "Fedora 26", "Fedora 27", "Fedora 28","Fedora 29","Fedora 30","Fedora 31","Fedora 32","Fedora 33","Fedora 34", "Mint 18", "Mint 19", "Mint 20", "openSUSE Leap 15", "openSUSE Leap 42.3", "openSUSE Tumbleweed", "Raspbian 10.0", "Raspbian 9.0 (stretch)", "Red Hat 7", "Red Hat 8", "Ubuntu 18.04", "Ubuntu 18.10", "Ubuntu 19.04", "Ubuntu 19.10", "Ubuntu 20.04", "Ubuntu 20.10", "Ubuntu 21.04"];


    //To do
    I.amOnPage('https://mega.nz/sync');
    I.see('MEGA Desktop App');

    I.see('Linux');
    I.click('Linux');
    I.wait(10);

    I.see('Please select your Linux Distro');
    I.click('.megaapp-linux-box-container:nth-child(6) .megaapp-inputs-wrap:nth-child(2) .sprite-fm-mono');
    I.wait(5);

    for (let i = 0; i < LinuxDistributions.length; i++) {
        
        I.see(LinuxDistributions[i]);
        I.saveScreenshot('LinuxDistribution_' + i + '.jpg');
        I.pressKey('ArrowDown');
        I.wait(1);
      }
    
});


