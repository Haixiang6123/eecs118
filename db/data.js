function makeUrl(name, entry='index.jsp', isPy) {
    if (!name) {
        return '#'
    }
    if (isPy) {
        return `http://localhost:8080/test/cgi-bin/${name}/${entry}` 
    } else {
        return `http://localhost:8080/test/jsp/${name}/${entry}`
    }
}

const db = {
    'Group A': {
        category: 'Group A',
        members: [{
                name: 'Silver Zhang',
                url: makeUrl('Silver', 'problem1.py', true)
            },
            {
                name: 'Aakif Hussaini',
                url: makeUrl()
            },
            {
                name: 'Derrell Record',
                url: makeUrl('Record', 'drecord_drecord_index.py', true)
            },
            {
                name: 'Benjamin Ng',
                url: makeUrl('52889465_GEO', 'Geo_Prob_Web.jsp')
            }
        ],
        images: [
            'assets/A/Circle and Triangle 14.JPG',
            'assets/A/Line and Triangle 1.JPG'
        ]
    },
    'Group B': {
        category: 'Group B',
        members: [{
                name: 'Zunwen Li',
                url: makeUrl('Zunwen', 'index.jsp')
            },
            {
                name: 'Hongyi Li',
                url: makeUrl('Hongyi', 'index.jsp')
            },
            {
                name: 'Zhifang Zeng',
                url: makeUrl('Zhifang', 'index.html')
            }
        ],
        images: [
            'assets/B/Circle and Triangle 15.JPG'
        ]
    },
    'Group C': {
        category: 'Group C',
        members: [{
                name: 'Steven Long',
                url: makeUrl('Steven', 'index.jsp')
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
    'Group D': {
        category: 'Group D',
        members: [{
                name: 'Steven Huynh',
                url: makeUrl()
            },
            {
                name: 'Rick Jiang',
                url: makeUrl('Rick', 'diagram_1.py', true)
            },
            {
                name: 'Yunyun Li',
                url: makeUrl('Yunyun', 'index.jsp')
            }
        ],
        images: [
            'assets/D/Two Triangle 5.JPG',
            'assets/D/Two Triangle 6.JPG',
        ]
    },
    'Group E': {
        category: 'Group E',
        members: [{
                name: 'Daniel Mendoza',
                url: makeUrl('Mendoza', 'index.jsp')
            },
            {
                name: 'Sean Michael Santarsiero',
                url: makeUrl('Sean', 'web_app_main.py', true)
            },
            {
                name: 'Rui Ji',
                url: makeUrl('Ji', 'hello.py', true)
            }
        ],
        images: [
            'assets/E/Two Triangle 8.JPG',
            'assets/E/Two Triangle 8.JPG',
        ]
    },
    'Group F': {
        category: 'Group F',
        members: [{
                name: 'Mohammad Gagai',
                url: makeUrl('Mohammad', 'index.py', true)
            },
            {
                name: 'Joseph Bacon',
                url: makeUrl()
            },
            {
                name: 'Bibek Adhikari',
                url: makeUrl('Bibek', 'adhikarb_index.html')
            }
        ],
        images: [
            'assets/F/Two Triangle 12.JPG',
        ]
    },
    'Group G': {
        category: 'Group G',
        members: [{
                name: 'Yutong Wang',
                url: makeUrl('Yutong', 'index.html')
            },
            {
                name: 'Ajan Subramanian',
                url: makeUrl('Subramanian', 'ajans_Geo_web.py', true)
            },
            {
                name: 'JD Ingal',
                url: makeUrl('Ingal', 'jringal_geoweb.jsp')
            }
        ],
        images: [
            'assets/G/Two Triangle 13.JPG',
        ]
    },
    'Group H': {
        category: 'Group H',
        members: [{
                name: 'Richemond Louidor',
                url: makeUrl('Richemond', 'userInput.py', true)
            },
            {
                name: 'Brian Truong',
                url: makeUrl('Brian', 'hello.py', true)
            },
            {
                name: 'Daniel Truong',
                url: makeUrl('Daniel', 'dtruong6_web.py', true)
            }
        ],
        images: [
            'assets/H/Two Triangle 14.JPG',
        ]
    },
    'Group I': {
        category: 'Group I',
        members: [{
                name: 'Faisal Iqbal',
                url: makeUrl('Faisal', 'iqbalf_webApp.py', true)
            },
            {
                name: 'Brandon Schnedar *',
                url: makeUrl('Schnedar', 'index.jsp')
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
    'Group J': {
        category: 'Group J',
        members: [{
                name: 'Renetta Nelson',
                url: makeUrl('Renetta', 'renettan_WebProblemmSolver.py', true)
            },
            {
                name: 'Janzal Karlo Sonza',
                url: makeUrl('Janzal', 'jsonza_test.py', true)
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
    'Group K': {
        category: 'Group K',
        members: [{
                name: 'Qing Huang',
                url: makeUrl('Qing', 'compute1.py', true)
            },
            {
                name: 'Hikaru Kasai',
                url: makeUrl()
            },
            {
                name: 'Juan Rodriguez',
                url: makeUrl('Juan', 'WEB-INF/cgi/webapp.py', true)
            }
        ],
        images: [
            'assets/K/Circle and Triangle 3.JPG',
            'assets/K/Circle and Triangle 4.JPG',
            'assets/K/Circle and Triangle 8.JPG',
        ]
    },
    'Group L': {
        category: 'Group L',
        members: [{
                name: 'Ian Dang',
                url: makeUrl('Dang', 'home.html')
            },
            {
                name: 'Li Cai',
                url: makeUrl('Cai', 'index.py', true)
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
    'Group M': {
        category: 'Group M',
        members: [{
                name: 'Han Sun',
                url: makeUrl('Han', 'sunh7_Main.jsp')
            },
            {
                name: 'Ziteng Zhang',
                url: makeUrl('Ziteng', 'zitengz1_serv.py', true)
            },
            {
                name: 'Jay Patel',
                url: makeUrl('Jay', 'jjpatel1_gui.py', true)
            }
        ],
        images: [
            'assets/M/Two Triangle 4.JPG',
            'assets/M/Two Triangle 11.JPG',
        ]
    },
    'Group N': {
        category: 'Group N',
        members: [{
                name: 'Lambert Nguyen',
                url: makeUrl()
            },
            {
                name: 'Manpreet Dhindsa',
                url: makeUrl('Manpreet', 'geometry.py', true)
            },
            {
                name: 'Spencer Kam',
                url: makeUrl('Spencer', 'inputs.jsp')
            }
        ],
        images: [
            'assets/N/Circle and Triangle 10.JPG',
            'assets/N/Circle and Triangle 13.JPG',
        ]
    },
    'Group O': {
        category: 'Group O',
        members: [{
                name: 'Eliza Ordonez',
                url: makeUrl('Eliza', 'eordonez_26488963_website.py', true)
            },
            {
                name: 'Justin Huy Le',
                url: makeUrl('Justin', 'lejh1_website.py', true)
            },
            {
                name: 'Selina Wang',
                url: makeUrl('Selina', 'jingw25_geometrysolver.py', true)
            }
        ],
        images: [
            'assets/O/Circle and Triangle 1.JPG',
            'assets/O/Circle and Triangle 5.JPG',
            'assets/O/Circle and Triangle 6.JPG',
        ]
    },
    'Group P': {
        category: 'Group P',
        members: [{
                name: 'Arshdeep Singh Dhillon',
                url: makeUrl()
            },
            {
                name: 'Jeremy Daproza',
                url: makeUrl('Jeremy', 'term_project.py', true)
            },
            {
                name: 'Gerry Su',
                url: makeUrl('Gerry', 'main.jsp')
            }
        ],
        images: [
            'assets/P/Circle and Triangle 2.JPG',
            'assets/P/Circle and Triangle 7.JPG',
            'assets/P/Two Triangle 2.JPG',
        ]
    },
    'Group Q': {
        category: 'Group Q',
        members: [{
                name: 'Jed Marasigan',
                url: makeUrl()
            },
            {
                name: 'Jingtao Leo Zhang',
                url: makeUrl('Jingtao', 'mockup.html')
            },
            {
                name: 'Chris Fernando',
                url: makeUrl('Fernando', 'index.jsp')
            }
        ],
        images: [
            'assets/Q/Line and Triangle 3.JPG',
            'assets/Q/Two Triangle 10.JPG',
            'assets/Q/Two Triangle 17.JPG',
        ]
    },
    'Group R': {
        category: 'Group R',
        members: [{
                name: 'Christian Serrano',
                url: makeUrl('Christian', 'serranc1_tpmain.py', true)
            },
            {
                name: 'Aaron Lee',
                url: makeUrl('aaronpl_geo_web_tp', 'triangle_info.jsp', false)
            },
            {
                name: 'Floranne Ellington',
                url: makeUrl('Ellington', 'index.py', true)
            }
        ],
        images: [
            'assets/R/Two Triangle 1.JPG',
            'assets/R/Circle and Triangle 9.JPG',
            'assets/R/Circle and Triangle 11.JPG',
        ]
    },
    'Group S': {
        category: 'Group S',
        members: [{
                name: 'Kenny Tat',
                url: makeUrl('Kenny', 'tatk_website.jsp')
            },
            {
                name: 'Tristan Guinto',
                url: makeUrl('Tristan', 'tguinto_tpweb.html')
            },
            {
                name: 'Jiarui Zhu',
                url: makeUrl('Jiarui', 'index.jsp')
            }
        ],
        images: [
            'assets/S/Circle and Triangle 12.JPG',
            'assets/S/Line and Triangle 4.JPG',
            'assets/S/Two Circle 1.JPG',
        ]
    },
    'Group T': {
        category: 'Group T',
        members: [{
                name: 'Chaoran Nong',
                url: makeUrl('Chaoran', 'nongc_hello.py', true)
            },
            {
                name: 'Mehdi Abbas',
                url: makeUrl('abbasm1_cgi', 'index.py', true)
            },
            {
                name: 'Kevin Chew',
                url: makeUrl('Chew', 'kychew_70872524_geometry_web_proto.jsp')
            }
        ],
        images: [
            'assets/T/Circle and Triangle 17.JPG',
            'assets/T/Line and Circle 1.JPG',
            'assets/T/Line and Circle 2.JPG',
        ]
    },
}