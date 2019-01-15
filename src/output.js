const unicodelogo_output =
    '<span class="hide-for-small">' +
    ' _  _   ___  _   _       __                      _ _              ___ _       _     _                         \n' +
    '| || | / _ \\| |_| |__   / _\\ ___  ___ _   _ _ __(_) |_ _   _     /   (_)_   _(_)___(_) ___  _ __            \n' +
    '| || || (_) | __| \'_ \\  \\ \\ / _ \\/ __| | | | \'__| | __| | | |   / /\\ / \\ \\ / / / __| |/ _ \\| \'_ \\ \n' +
    '|__   _\\__, | |_| | | | _\\ \\  __/ (__| |_| | |  | | |_| |_| |  / /_//| |\\ V /| \\__ \\ | (_) | | | |      \n' +
    '   |_|   /_/ \\__|_| |_| \\__/\\___|\\___|\\__,_|_|  |_|\\__|\\__, | /___,\' |_| \\_/ |_|___/_|\\___/|_| |_|  \n' +
    '                                                       |___/                                                  \n\n' +
    '</span>';

const about_output =
    'The 49th Security Division started in 2009 with six students driven by their passion for security. Since being established, we have grown to around fifty or more members and have many accomplishments behind us... With plenty more to come. The club has since developed relationships with outside professionals, organizations, and companies. Our reach is far beyond just the UNC Charlotte campus. We compete in multiple competitions each year, including International Capture the Flag (iCTF) and CCDC. These competitions help to improve practical security skills and provide real world experience. We also travel to various security conferences on the east coast. Some of the conferences we attend are ISSA Summit, Carolina Con, ShmooCon, and B-Sides.';

const verbose_about_output =
    about_output + '\n\n' +
    'The 49th Security Division is dedicated to personal and professional growth. We have many social events and forums each year and everyone is welcome. We create our training materials out of experience, and learn from one another. No matter your knowledge base, your major, or your focus, there is something for you in 49SD. The 49th Security Division is composed of students in all departments that have a vested interest in computer and physical security. The club helps all members reach technical and professional excellence by engaging in hands on activities, cons, competitions and presentations.';

const leaders_output =
    'name                          role                                                  \n' +
    '____________________________________________________________________________________\n\n' +
    'Trevon Williams               President                                             \n' +
    'Michael Petty                 Vice President                                        \n' +
    'Wes Ring                      Treasurer                                             \n' +
    'David Simpson                 Executive Coordinator                                 \n' +
    '                              Director of Marketing and Public Relations            \n' +
    'Matt Fiely                    Director of Training and Education                    \n' +
    'Zachary Taylor                Director of Competitions                              \n' +
    'Niara Parker                  Director of Events                                    \n' +
    'Noah Bell                     Alumni Affairs Manager                                \n' +
    'Tyler Coatsworth              Career and Development Manager                        \n' +
    'Shail Patel                   Social Media and Outreach Manager                     \n' +
    'Joseph Logan                  Social Media and Outreach Manager                     \n' +
    'Jessica Russ                  Social Media and Outreach Manager                     \n' +
    'Lukas Gupta-Leary             Web Development Manager                               \n' +
    'Alexander Rodriguez           Lab Manager                                           \n' +
    'Noah Bell                     Lab Manager                                           \n' +
    'Deepak Mirchandani            Secretary';

// const calendar_output =
//     'id  title                           date              time         location    \n' +
//     '_______________________________________________________________________________\n\n' +
//     '0   Capture the Flag Competition    09/29/2017        18:30        Woodward 120\n' +
//     '1   Cyber Security Symposium        10/11/2017        all day      Cone        \n' +
//     '2   Guest Speaker                   10/20/2017        18:30        Woodward 154\n' +
//     '3   Education Class on XSS          10/25/2017        18:30        CHHS 100    ';

const join_output =
    '1. Navigate to <a href="https://ninerengage.uncc.edu" target="_blank">https://ninerengage.uncc.edu</a>\n' +
    '2. Click "Sign in" in the top-right corner to login\n' +
    '3. Navigate to <a href="https://ninerengage.uncc.edu/submitter/form/start/246340" target="_blank">https://ninerengage.uncc.edu/submitter/form/start/246340</a>\n' +
    '4. Complete the form and you\'re in!\n';

export const command_output = {
    about: unicodelogo_output + about_output,
    about_verbose: unicodelogo_output + verbose_about_output,
    leaders: leaders_output,
    // calendar: calendar_output,
    join: join_output
};

export const help_output = [
    {
        command: 'about',
        output: 'NAME                                                      \n' +
            '   about - output a description of 49th Security Division     \n\n' +
            'OPTIONS                                                       \n' +
            '   -v, --verbose                                              \n' +
            '      display a more detailed description                     \n' +
            '   -help                                                      \n' +
            '      display available commands                              \n'
    }, {
        command: 'leaders',
        output: 'NAME                                                      \n' +
            '   leaders - list the members on the 49sd leadership team     \n\n' +
            'OPTIONS                                                       \n' +
            '   -help                                                      \n' +
            '      display available commands                              \n'
    }, {
        command: 'calendar',
        output: 'NAME                                                      \n' +
            '   calendar - list the upcoming events for 49sd               \n\n' +
            'OPTIONS                                                       \n' +
            '   -help                                                      \n' +
            '      display available commands                              \n'
    }, {
        command: 'join',
        output: 'NAME                                                      \n' +
            '   join - list the instructions for joining 49sd              \n\n' +
            'OPTIONS                                                       \n' +
            '   -help                                                      \n' +
            '      display available commands                              \n'
    }, {
        command: 'clear',
        output: 'NAME                                                      \n' +
            '   clear - clear all terminal output                          \n'
    }, {
        command: 'help',
        output: 'NAME                                                      \n' +
            '   help - list available commands                             \n'
    }
];

export const error_output = ': command not found';

export const loader_text =
    'LILO boot:                                                                     <br>' +
    'Loading linux.                                                                 <br>' +
    'Console: colour EGA+ 80x25, 8 virtual consoles                                 <br>' +
    'Serial driver version 3.94 with no serial options enabled                      <br>' +
    'tty00 at 0x03f8 (irq = 4) is a 16450                                           <br>' +
    'tty01 at 0x02f8 (irq = 3) is a 16450                                           <br>' +
    'lp_init: lp1 exists (0), using polling driver                                  <br>' +
    'Memory: 7332k/8192k available (300k kernel code, 384k reserved, 176k data)     <br>' +
    'Floppy drive(s): fd0 is 1.44M, fd1 is 1.2M                                     <br>' +
    'Loopback device init                                                           <br>' +
    'Warning WD8013 board not found at i/o = 280.                                   <br>' +
    'Math coprocessor using irq13 error reporting.                                  <br>' +
    'Partition check:                                                               <br>' +
    '  hda: hda1 hda2 hda3                                                          <br>' +
    'VFS: Mounted root (ext filesystem).                                            <br>' +
    'Linux version 0.99.pl9-1 (root@haven) 05/01/93 14:12:20';