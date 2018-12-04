const ip = 'http://localhost'
const jspPort = '8080'
const pyPort = '8006'
const jyPort = '待填'

const jspPath = 'GPS-geo-js'
const pyPath = 'GPS-geo-python/cgi-bin'
const jyPath = 'GPS-geo-jython'
function makeUrl(name, format, fileName) {
    if (!name) {
        return '#'
    }
    if (format === 1) {
        fileName = fileName ? fileName : 'index.jsp'
        return `${ip}:${jspPort}/${jspPath}/${name}/${fileName}`
    }
    if (format === 2) {
        fileName = fileName ? fileName : 'index.py'
        return `${ip}:${pyPort}/${pyPath}/${name}/${fileName}`
    }
    if (format === 3) {
        fileName = fileName ? fileName : 'index.待填'
        return `${ip}:${jyPort}/${jyPath}/${name}/${fileName}`
    }
}

const db = {
    'Group-A': {
        category: 'Group-A',
        members: [{
                name: 'Silver Zhang',
                // 1 -> jsp; 2 -> python; 3 -> jython
                url: makeUrl('GEO-?', 1, '如果不是index.jsp则写其他文件名.jsp')
            },
            {
                name: 'Aakif Hussaini',
                url: makeUrl()
            },
            {
                name: 'Derrell Record',
                url: makeUrl()
            },
            {
                name: 'Benjamin Ng',
                url: makeUrl()
            }
        ],
        images: [
            'assets/A/Circle and Triangle 14.JPG',
            'assets/A/Line and Triangle 1.JPG'
        ]
    },
    'Group-B': {
        category: 'Group-B',
        members: [{
                name: 'Zunwen Li',
                url: makeUrl()
            },
            {
                name: 'Hongyi Li',
                url: makeUrl()
            },
            {
                name: 'Zhifang Zeng',
                url: makeUrl()
            }
        ],
        images: [
            'assets/B/Circle and Triangle 15.JPG'
        ]
    },
    'Group-C': {
        category: 'Group-C',
        members: [{
                name: 'Steven Long',
                url: makeUrl()
            },
            {
                name: 'Diego Torres',
                url: makeUrl()
            },
            {
                name: 'Arian Reyes',
                url: makeUrl()
            }
        ],
        images: [
            'assets/C/Circle and Triangle 16.JPG',
        ]
    },
    'Group-D': {
        category: 'Group-D',
        members: [{
                name: 'Steven Huynh',
                url: makeUrl()
            },
            {
                name: 'Rick Jiang',
                url: makeUrl()
            },
            {
                name: 'Yunyun Li',
                url: makeUrl()
            }
        ],
        images: [
            'assets/D/Two Triangle 5.JPG',
            'assets/D/Two Triangle 6.JPG',
        ]
    },
    'Group-E': {
        category: 'Group-E',
        members: [{
                name: 'Daniel Mendoza',
                url: makeUrl()
            },
            {
                name: 'Sean Michael Santarsiero',
                url: makeUrl()
            },
            {
                name: 'Rui Ji',
                url: makeUrl()
            }
        ],
        images: [
            'assets/E/Two Triangle 8.JPG',
            'assets/E/Two Triangle 8.JPG',
        ]
    },
    'Group-F': {
        category: 'Group-F',
        members: [{
                name: 'Mohammad Gagai',
                url: makeUrl()
            },
            {
                name: 'Joseph Bacon',
                url: makeUrl()
            },
            {
                name: 'Bibek Adhikari',
                url: makeUrl()
            }
        ],
        images: [
            'assets/F/Two Triangle 12.JPG',
        ]
    },
    'Group-G': {
        category: 'Group-G',
        members: [{
                name: 'Yutong Wang',
                url: makeUrl()
            },
            {
                name: 'Ajan Subramanian',
                url: makeUrl()
            },
            {
                name: 'JD Ingal',
                url: makeUrl()
            }
        ],
        images: [
            'assets/G/Two Triangle 13.JPG',
        ]
    },
    'Group-H': {
        category: 'Group-H',
        members: [{
                name: 'Richemond Louidor',
                url: makeUrl()
            },
            {
                name: 'Brian Truong',
                url: makeUrl()
            },
            {
                name: 'Daniel Truong',
                url: makeUrl()
            }
        ],
        images: [
            'assets/H/Two Triangle 14.JPG',
        ]
    },
    'Group-I': {
        category: 'Group-I',
        members: [{
                name: 'Faisal Iqbal',
                url: makeUrl()
            },
            {
                name: 'Brandon Schnedar *',
                url: makeUrl()
            },
            {
                name: 'Ziri Zhou',
                url: makeUrl()
            }
        ],
        images: [
            'assets/I/Two Triangle 15.JPG',
        ]
    },
    'Group-J': {
        category: 'Group-J',
        members: [{
                name: 'Renetta Nelson',
                url: makeUrl()
            },
            {
                name: 'Janzal Karlo Sonza',
                url: makeUrl()
            },
            {
                name: 'George Toc',
                url: makeUrl()
            }
        ],
        images: [
            'assets/J/Two Triangle 16.JPG',
        ]
    },
    'Group-K': {
        category: 'Group-K',
        members: [{
                name: 'Qing Huang',
                url: makeUrl()
            },
            {
                name: 'Hikaru Kasai',
                url: makeUrl()
            },
            {
                name: 'Juan Rodriguez',
                url: makeUrl()
            }
        ],
        images: [
            'assets/K/Circle and Triangle 3.JPG',
            'assets/K/Circle and Triangle 4.JPG',
            'assets/K/Circle and Triangle 8.JPG',
        ]
    },
    'Group-L': {
        category: 'Group-L',
        members: [{
                name: 'Ian Dang',
                url: makeUrl()
            },
            {
                name: 'Li Cai',
                url: makeUrl()
            },
            {
                name: 'Heng Ye',
                url: makeUrl()
            }
        ],
        images: [
            'assets/L/Line and Triangle 2.JPG',
            'assets/L/Two Triangle 3.JPG',
            'assets/L/Two Triangle 7.JPG',
        ]
    },
    'Group-M': {
        category: 'Group-M',
        members: [{
                name: 'Han Sun',
                url: makeUrl()
            },
            {
                name: 'Ziteng Zhang',
                url: makeUrl()
            },
            {
                name: 'Jay Patel',
                url: makeUrl()
            }
        ],
        images: [
            'assets/M/Two Triangle 4.JPG',
            'assets/M/Two Triangle 11.JPG',
        ]
    },
    'Group-N': {
        category: 'Group-N',
        members: [{
                name: 'Lambert Nguyen',
                url: makeUrl()
            },
            {
                name: 'Manpreet Dhindsa',
                url: makeUrl()
            },
            {
                name: 'Spencer Kam',
                url: makeUrl()
            }
        ],
        images: [
            'assets/N/Circle and Triangle 10.JPG',
            'assets/N/Circle and Triangle 13.JPG',
        ]
    },
    'Group-O': {
        category: 'Group-O',
        members: [{
                name: 'Eliza Ordonez',
                url: makeUrl()
            },
            {
                name: 'Justin Huy Le',
                url: makeUrl()
            },
            {
                name: 'Selina Wang',
                url: makeUrl()
            }
        ],
        images: [
            'assets/O/Circle and Triangle 1.JPG',
            'assets/O/Circle and Triangle 5.JPG',
            'assets/O/Circle and Triangle 6.JPG',
        ]
    },
    'Group-P': {
        category: 'Group-P',
        members: [{
                name: 'Arshdeep Singh Dhillon',
                url: makeUrl()
            },
            {
                name: 'Jeremy Daproza',
                url: makeUrl()
            },
            {
                name: 'Gerry Su',
                url: makeUrl()
            }
        ],
        images: [
            'assets/P/Circle and Triangle 2.JPG',
            'assets/P/Circle and Triangle 7.JPG',
            'assets/P/Two Triangle 2.JPG',
        ]
    },
    'Group-Q': {
        category: 'Group-Q',
        members: [{
                name: 'Jed Marasigan',
                url: makeUrl()
            },
            {
                name: 'Jingtao Leo Zhang',
                url: makeUrl()
            },
            {
                name: 'Chris Fernando',
                url: makeUrl()
            }
        ],
        images: [
            'assets/Q/Line and Triangle 3.JPG',
            'assets/Q/Two Triangle 10.JPG',
            'assets/Q/Two Triangle 17.JPG',
        ]
    },
    'Group-R': {
        category: 'Group-R',
        members: [{
                name: 'Christian Serrano',
                url: makeUrl()
            },
            {
                name: 'Aaron Lee',
                url: makeUrl()
            },
            {
                name: 'Floranne Ellington',
                url: makeUrl()
            }
        ],
        images: [
            'assets/R/Two Triangle 1.JPG',
            'assets/R/Circle and Triangle 9.JPG',
            'assets/R/Circle and Triangle 11.JPG',
        ]
    },
    'Group-S': {
        category: 'Group-S',
        members: [{
                name: 'Kenny Tat',
                url: makeUrl()
            },
            {
                name: 'Tristan Guinto',
                url: makeUrl()
            },
            {
                name: 'Jiarui Zhu',
                url: makeUrl()
            }
        ],
        images: [
            'assets/S/Circle and Triangle 12.JPG',
            'assets/S/Line and Triangle 4.JPG',
            'assets/S/Two Circle 1.JPG',
        ]
    },
    'Group-T': {
        category: 'Group-T',
        members: [{
                name: 'Chaoran Nong',
                url: makeUrl()
            },
            {
                name: 'Mehdi Abbas',
                url: makeUrl()
            },
            {
                name: 'Kevin Chew',
                url: makeUrl()
            }
        ],
        images: [
            'assets/T/Circle and Triangle 17.JPG',
            'assets/T/Line and Circle 1.JPG',
            'assets/T/Line and Circle 2.JPG',
        ]
    },
}