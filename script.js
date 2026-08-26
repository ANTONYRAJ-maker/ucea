/*
 * University College of Engineering Arni
 * Department Information Portal
 *
 * IMPORTANT:
 * All names, emails, statistics, laboratory details and other institutional
 * information below are PLACEHOLDER DATA. Replace them with verified official
 * information before publishing.
 */

const departments = {
    "Computer Science and Engineering": {
        description: "Placeholder overview: The Department of Computer Science and Engineering is presented here as an academic unit focused on computing education, software development and emerging digital technologies. Replace this paragraph with the verified institutional overview.",
        vision: "Placeholder vision: To foster strong computing knowledge, ethical professional practice and innovation-oriented engineering graduates.",
        mission: [
            "Placeholder: Deliver a strong foundation in computing theory and engineering practice.",
            "Placeholder: Encourage project-based learning, research and innovation.",
            "Placeholder: Develop professional, ethical and socially responsible graduates."
        ],
        programs: [
            "B.E. Computer Science and Engineering (placeholder)",
            "Add verified postgraduate programs here"
        ],
        specialization: [
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Cyber Security",
            "Cloud Computing"
        ],
        highlights: [
            "Placeholder academic projects",
            "Technical workshops and seminars",
            "Student innovation activities",
            "Industry-oriented skill development"
        ],
        staff: [
            {
                name: "Dr. Faculty Name",
                designation: "Assistant Professor",
                email: "faculty@example.edu",
                specialization: "Artificial Intelligence, Machine Learning",
                image: "images/staff/staff-01.jpg"
            },
            {
                name: "Prof. Faculty Name",
                designation: "Assistant Professor",
                email: "faculty02@example.edu",
                specialization: "Data Science, Cloud Computing",
                image: "images/staff/staff-02.jpg"
            },
            {
                name: "Dr. Faculty Name",
                designation: "Associate Professor",
                email: "faculty03@example.edu",
                specialization: "Cyber Security, Networks",
                image: "images/staff/staff-03.jpg"
            }
        ],
        laboratories: [
            {
                name: "Programming Laboratory",
                devices: "Desktop Computers",
                count: 60,
                description: "Placeholder laboratory for programming, data structures and software development practicals."
            },
            {
                name: "Networking Laboratory",
                devices: "Routers, Switches, Network Devices",
                count: 25,
                description: "Placeholder laboratory for computer networks and communication practicals."
            },
            {
                name: "AI & Data Science Laboratory",
                devices: "Computing Systems, Development Platforms",
                count: 35,
                description: "Placeholder laboratory for artificial intelligence, machine learning and data analytics."
            }
        ],
        students: {
            count: 120,
            classAdvisor: "Dr. Faculty Name (placeholder)",
            representatives: [
                "Student Representative 1 (placeholder)",
                "Student Representative 2 (placeholder)"
            ]
        }
    },

    "Electrical and Electronics Engineering": {
        description: "Placeholder overview: The Department of Electrical and Electronics Engineering is presented as an academic unit supporting education in electrical systems, power engineering, control and related technologies. Replace with verified institutional content.",
        vision: "Placeholder vision: To prepare competent electrical engineering graduates with strong technical knowledge, innovation and professional responsibility.",
        mission: [
            "Placeholder: Provide fundamentals and practical exposure in electrical engineering.",
            "Placeholder: Promote laboratory learning, design projects and applied research.",
            "Placeholder: Develop graduates capable of addressing engineering challenges ethically."
        ],
        programs: [
            "B.E. Electrical and Electronics Engineering (placeholder)",
            "Add verified programs here"
        ],
        specialization: [
            "Power Systems",
            "Electrical Machines",
            "Power Electronics",
            "Control Systems",
            "Renewable Energy"
        ],
        highlights: [
            "Placeholder power-system projects",
            "Electrical design activities",
            "Technical workshops",
            "Energy and sustainability initiatives"
        ],
        staff: [
            {
                name: "Dr. Faculty Name",
                designation: "Assistant Professor",
                email: "eee-faculty@example.edu",
                specialization: "Power Systems, Smart Grids",
                image: "images/staff/staff-04.jpg"
            },
            {
                name: "Prof. Faculty Name",
                designation: "Assistant Professor",
                email: "eee-faculty02@example.edu",
                specialization: "Power Electronics, Drives",
                image: "images/staff/staff-05.jpg"
            },
            {
                name: "Dr. Faculty Name",
                designation: "Associate Professor",
                email: "eee-faculty03@example.edu",
                specialization: "Control Systems, Renewable Energy",
                image: "images/staff/staff-06.jpg"
            }
        ],
        laboratories: [
            {
                name: "Electrical Machines Laboratory",
                devices: "Motors, Generators, Test Benches",
                count: 20,
                description: "Placeholder facility for electrical machines experiments and performance studies."
            },
            {
                name: "Power Electronics Laboratory",
                devices: "Converters, Inverters, Controllers",
                count: 18,
                description: "Placeholder facility for power semiconductor and converter experiments."
            },
            {
                name: "Control Systems Laboratory",
                devices: "Control Trainers, Measurement Systems",
                count: 15,
                description: "Placeholder facility for control theory and automation practicals."
            }
        ],
        students: {
            count: 90,
            classAdvisor: "Dr. Faculty Name (placeholder)",
            representatives: [
                "Student Representative 1 (placeholder)",
                "Student Representative 2 (placeholder)"
            ]
        }
    },

    "Electronics and Communication Engineering": {
        description: "Placeholder overview: The Department of Electronics and Communication Engineering is presented as an academic unit covering electronics, communication systems, embedded technologies and signal processing. Replace with verified institutional content.",
        vision: "Placeholder vision: To develop electronics and communication engineers with technical excellence, creativity and professional ethics.",
        mission: [
            "Placeholder: Build strong foundations in electronics and communication engineering.",
            "Placeholder: Provide practical exposure through laboratories, projects and technical activities.",
            "Placeholder: Encourage innovation, research and lifelong learning."
        ],
        programs: [
            "B.E. Electronics and Communication Engineering (placeholder)",
            "Add verified programs here"
        ],
        specialization: [
            "Embedded Systems",
            "VLSI Design",
            "Wireless Communication",
            "Signal Processing",
            "IoT"
        ],
        highlights: [
            "Embedded system projects",
            "Communication technology workshops",
            "Innovation and prototype development",
            "Student technical activities"
        ],
        staff: [
            {
                name: "Dr. Faculty Name",
                designation: "Assistant Professor",
                email: "ece-faculty@example.edu",
                specialization: "Embedded Systems, IoT",
                image: "images/staff/staff-07.jpg"
            },
            {
                name: "Prof. Faculty Name",
                designation: "Assistant Professor",
                email: "ece-faculty02@example.edu",
                specialization: "VLSI Design, Digital Electronics",
                image: "images/staff/staff-08.jpg"
            },
            {
                name: "Dr. Faculty Name",
                designation: "Associate Professor",
                email: "ece-faculty03@example.edu",
                specialization: "Wireless Communication, DSP",
                image: "images/staff/staff-09.jpg"
            }
        ],
        laboratories: [
            {
                name: "Electronics Laboratory",
                devices: "Oscilloscopes, Function Generators, Trainers",
                count: 30,
                description: "Placeholder facility for electronics circuits and measurement experiments."
            },
            {
                name: "Communication Laboratory",
                devices: "Communication Trainers, Signal Generators",
                count: 20,
                description: "Placeholder facility for analog, digital and wireless communication experiments."
            },
            {
                name: "Embedded Systems Laboratory",
                devices: "Microcontrollers, Development Boards",
                count: 30,
                description: "Placeholder facility for embedded programming and IoT projects."
            }
        ],
        students: {
            count: 100,
            classAdvisor: "Dr. Faculty Name (placeholder)",
            representatives: [
                "Student Representative 1 (placeholder)",
                "Student Representative 2 (placeholder)"
            ]
        }
    },

    "Mechanical Engineering": {
        description: "Placeholder overview: The Department of Mechanical Engineering is presented as an academic unit supporting engineering education in design, manufacturing, thermal systems and mechanical analysis. Replace with verified institutional content.",
        vision: "Placeholder vision: To prepare technically competent mechanical engineers with design capability, innovation and responsible professional practice.",
        mission: [
            "Placeholder: Provide strong fundamentals in mechanical engineering science and design.",
            "Placeholder: Develop practical competence through laboratories, workshops and projects.",
            "Placeholder: Promote innovation, sustainability and professional ethics."
        ],
        programs: [
            "B.E. Mechanical Engineering (placeholder)",
            "Add verified programs here"
        ],
        specialization: [
            "CAD/CAM",
            "Manufacturing",
            "Thermal Engineering",
            "Automotive Engineering",
            "Robotics"
        ],
        highlights: [
            "Design and manufacturing projects",
            "Workshop-based learning",
            "CAD/CAM activities",
            "Innovation and prototype development"
        ],
        staff: [
            {
                name: "Dr. Faculty Name",
                designation: "Assistant Professor",
                email: "mech-faculty@example.edu",
                specialization: "Thermal Engineering, Energy Systems",
                image: "images/staff/staff-10.jpg"
            },
            {
                name: "Prof. Faculty Name",
                designation: "Assistant Professor",
                email: "mech-faculty02@example.edu",
                specialization: "CAD/CAM, Manufacturing",
                image: "images/staff/staff-11.jpg"
            },
            {
                name: "Dr. Faculty Name",
                designation: "Associate Professor",
                email: "mech-faculty03@example.edu",
                specialization: "Automotive Engineering, Robotics",
                image: "images/staff/staff-12.jpg"
            }
        ],
        laboratories: [
            {
                name: "Manufacturing Laboratory",
                devices: "Lathe, Milling, Drilling Machines",
                count: 22,
                description: "Placeholder workshop facility for manufacturing processes and machining practicals."
            },
            {
                name: "Thermal Engineering Laboratory",
                devices: "Engines, Boilers, Heat Transfer Trainers",
                count: 18,
                description: "Placeholder facility for thermal engineering and energy-system experiments."
            },
            {
                name: "CAD/CAM Laboratory",
                devices: "Workstations, CAD/CAM Software",
                count: 30,
                description: "Placeholder facility for computer-aided design and manufacturing activities."
            }
        ],
        students: {
            count: 85,
            classAdvisor: "Dr. Faculty Name (placeholder)",
            representatives: [
                "Student Representative 1 (placeholder)",
                "Student Representative 2 (placeholder)"
            ]
        }
    }
};


// ============================================================
// GLOBAL VARIABLES
// ============================================================

const departmentNames = Object.keys(departments);

let selectedDepartment = "Computer Science and Engineering";
let selectedDivision = "overview";

const contentArea = document.getElementById("contentArea");
const selectedDepartmentBadge =
    document.getElementById("selectedDepartmentBadge");

const departmentCards =
    document.getElementById("departmentCards");

const departmentMenu =
    document.getElementById("departmentMenu");

const searchResultsSection =
    document.getElementById("searchResultsSection");

const searchResults =
    document.getElementById("searchResults");

const searchSummary =
    document.getElementById("searchSummary");


// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function placeholderImage(text = "Faculty") {
    const safeText = encodeURIComponent(text);

    return `https://placehold.co/800x600/e8edf2/123b6d?text=${safeText}`;
}


function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ============================================================
// INITIALIZE NAVIGATION
// ============================================================

function initializeNavigation() {

    departmentMenu.innerHTML = departmentNames
        .map(name => `
            <button
                type="button"
                role="menuitem"
                class="${name === selectedDepartment ? "active" : ""}"
                data-department="${escapeHtml(name)}">

                ${escapeHtml(name)}

            </button>
        `)
        .join("");


    // Department selection

    document
        .querySelectorAll("[data-department]")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectDepartment(button.dataset.department);

                closeDropdowns();

                closeMobileMenu();

            });

        });


    // Division selection

    document
        .querySelectorAll("[data-division]")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectDivision(button.dataset.division);

                closeDropdowns();

                closeMobileMenu();

            });

        });


    // Footer division buttons

    document
        .querySelectorAll("[data-footer-division]")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectDivision(button.dataset.footerDivision);

                document
                    .getElementById("portal")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            });

        });


    // Dropdown buttons

    document
        .querySelectorAll(".dropdown-toggle")
        .forEach(toggle => {

            toggle.addEventListener("click", () => {

                const parent =
                    toggle.closest(".nav-dropdown");

                const wasOpen =
                    parent.classList.contains("open");

                closeDropdowns();

                if (!wasOpen) {

                    parent.classList.add("open");

                    toggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            });

        });


    // Close dropdowns when clicking elsewhere

    document.addEventListener("click", event => {

        if (!event.target.closest(".nav-dropdown")) {

            closeDropdowns();

        }

    });

}


// ============================================================
// DEPARTMENT CARDS
// ============================================================

function renderDepartmentCards() {

    departmentCards.innerHTML = departmentNames
        .map((name, index) => {

            const dept = departments[name];

            return `
                <article
                    class="department-card
                    ${name === selectedDepartment ? "selected" : ""}">

                    <span class="card-number">
                        0${index + 1}
                    </span>

                    <h3>
                        ${escapeHtml(name)}
                    </h3>

                    <p>
                        ${escapeHtml(dept.description)}
                    </p>

                    <button
                        class="btn btn-primary"
                        type="button"
                        data-view-department="${escapeHtml(name)}">

                        View Department

                    </button>

                </article>
            `;

        })
        .join("");


    // View Department buttons

    document
        .querySelectorAll("[data-view-department]")
        .forEach(button => {

            button.addEventListener("click", () => {

                selectDepartment(
                    button.dataset.viewDepartment
                );

                document
                    .getElementById("portal")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            });

        });

}


// ============================================================
// SELECT DEPARTMENT
// ============================================================

function selectDepartment(departmentName) {

    if (!departments[departmentName]) {
        return;
    }

    selectedDepartment = departmentName;

    selectedDivision = "overview";


    // Highlight selected department

    document
        .querySelectorAll("[data-department]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.department === selectedDepartment
            );

        });


    renderDepartmentCards();

    renderDepartment();

}


// ============================================================
// SELECT DIVISION
// ============================================================

function selectDivision(divisionName) {

    selectedDivision = divisionName;


    if (divisionName === "staff") {

        renderStaff();

    }

    else if (divisionName === "laboratory") {

        renderLaboratories();

    }

    else if (divisionName === "students") {

        renderStudents();

    }

    else {

        renderDepartment();

    }


    document
        .getElementById("portal")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


// ============================================================
// RENDER DEPARTMENT OVERVIEW
// ============================================================

function renderDepartment() {

    const dept =
        departments[selectedDepartment];

    selectedDepartmentBadge.textContent =
        selectedDepartment;


    contentArea.innerHTML = `

        <div class="division-banner">

            <h3>
                Department Overview
            </h3>

            <p>
                ${escapeHtml(selectedDepartment)}
                — overview, academic focus and
                placeholder highlights.
            </p>

        </div>


        <div class="department-overview">

            <article class="content-card">

                <h3>
                    About the Department
                </h3>

                <p>
                    ${escapeHtml(dept.description)}
                </p>


                <div class="info-grid">

                    <div>

                        <h4>
                            Vision
                        </h4>

                        <p>
                            ${escapeHtml(dept.vision)}
                        </p>

                    </div>


                    <div>

                        <h4>
                            Mission
                        </h4>

                        <ul class="highlight-list">

                            ${dept.mission
                                .map(item => `
                                    <li>
                                        ${escapeHtml(item)}
                                    </li>
                                `)
                                .join("")}

                        </ul>

                    </div>

                </div>

            </article>


            <article class="content-card">

                <h3>
                    Programs Offered
                </h3>

                <ul class="highlight-list">

                    ${dept.programs
                        .map(item => `
                            <li>
                                ${escapeHtml(item)}
                            </li>
                        `)
                        .join("")}

                </ul>


                <h3>
                    Areas of Specialization
                </h3>

                <ul class="tag-list">

                    ${dept.specialization
                        .map(item => `
                            <li>
                                ${escapeHtml(item)}
                            </li>
                        `)
                        .join("")}

                </ul>

            </article>

        </div>


        <article
            class="content-card"
            style="margin-top:22px;">

            <h3>
                Department Highlights
            </h3>

            <ul class="highlight-list">

                ${dept.highlights
                    .map(item => `
                        <li>
                            ${escapeHtml(item)}
                        </li>
                    `)
                    .join("")}

            </ul>

            <span class="placeholder-note">
                Placeholder data
            </span>

        </article>

    `;

}


// ============================================================
// RENDER STAFF
// ============================================================

function renderStaff() {

    const dept =
        departments[selectedDepartment];

    selectedDepartmentBadge.textContent =
        `${selectedDepartment} • Staff`;


    contentArea.innerHTML = `

        <div class="division-banner">

            <h3>
                Staff Directory
            </h3>

            <p>
                Staff information for
                <strong>
                    ${escapeHtml(selectedDepartment)}
                </strong>.

                Names, emails and photographs below
                are placeholder data.
            </p>

        </div>


        <div class="staff-grid">

            ${dept.staff
                .map((member, index) => `

                    <article class="staff-card">

                        <img
                            class="staff-photo"
                            src="${escapeHtml(member.image)}"
                            alt="Placeholder profile photograph for ${escapeHtml(member.name)}"
                            onerror="
                                this.onerror=null;
                                this.src=placeholderImage('Faculty ${index + 1}');
                            "
                        >


                        <div class="staff-body">

                            <h3>
                                ${escapeHtml(member.name)}
                            </h3>

                            <p class="designation">
                                ${escapeHtml(member.designation)}
                            </p>


                            <p class="staff-meta">

                                <strong>
                                    Department:
                                </strong>

                                ${escapeHtml(selectedDepartment)}

                            </p>


                            <p class="staff-meta">

                                <strong>
                                    Email:
                                </strong>

                                <a href="mailto:${escapeHtml(member.email)}">

                                    ${escapeHtml(member.email)}

                                </a>

                            </p>


                            <p class="staff-meta">

                                <strong>
                                    Area of Specialization:
                                </strong>

                                ${escapeHtml(member.specialization)}

                            </p>


                            <span class="placeholder-note">
                                Placeholder profile
                            </span>

                        </div>

                    </article>

                `)
                .join("")}

        </div>

    `;

}


// ============================================================
// RENDER LABORATORIES
// ============================================================

function renderLaboratories() {

    const dept =
        departments[selectedDepartment];

    selectedDepartmentBadge.textContent =
        `${selectedDepartment} • Laboratory`;


    contentArea.innerHTML = `

        <div class="division-banner">

            <h3>
                Laboratory Facilities
            </h3>

            <p>
                Laboratory information for
                <strong>
                    ${escapeHtml(selectedDepartment)}
                </strong>.

                Equipment and counts are placeholders.
            </p>

        </div>


        <div class="lab-table-wrap">

            <table class="lab-table">

                <thead>

                    <tr>

                        <th>
                            Laboratory Name
                        </th>

                        <th>
                            Instruments / Devices
                        </th>

                        <th>
                            Number of Devices
                        </th>

                        <th>
                            Description
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${dept.laboratories
                        .map(lab => `

                            <tr>

                                <td>
                                    <strong>
                                        ${escapeHtml(lab.name)}
                                    </strong>
                                </td>

                                <td>
                                    ${escapeHtml(lab.devices)}
                                </td>

                                <td>
                                    ${escapeHtml(lab.count)}
                                </td>

                                <td>
                                    ${escapeHtml(lab.description)}
                                </td>

                            </tr>

                        `)
                        .join("")}

                </tbody>

            </table>

        </div>

    `;

}


// ============================================================
// RENDER STUDENTS
// ============================================================

function renderStudents() {

    selectedDepartmentBadge.textContent =
        `${selectedDepartment} • Students`;


    const cards =
        departmentNames
            .map(name => {

                const student =
                    departments[name].students;


                return `

                    <article class="student-card">

                        <h3>
                            ${escapeHtml(name)}
                        </h3>


                        <div class="student-stat">

                            <span>
                                Number of Students
                            </span>

                            <strong>
                                ${escapeHtml(student.count)}
                            </strong>

                        </div>


                        <p>

                            <strong>
                                Class Advisor:
                            </strong>

                            ${escapeHtml(student.classAdvisor)}

                        </p>


                        <p>

                            <strong>
                                Student Representatives:
                            </strong>

                        </p>


                        <ul>

                            ${student.representatives
                                .map(rep => `
                                    <li>
                                        ${escapeHtml(rep)}
                                    </li>
                                `)
                                .join("")}

                        </ul>


                        <span class="placeholder-note">
                            Placeholder student data
                        </span>

                    </article>

                `;

            })
            .join("");


    contentArea.innerHTML = `

        <div class="division-banner">

            <h3>
                Student Information
            </h3>

            <p>
                Student information for all four departments.
                All statistics, advisors and representatives
                are placeholder data.
            </p>

        </div>


        <div class="student-grid">

            ${cards}

        </div>

    `;

}


// ============================================================
// SEARCH
// ============================================================

function searchContent(query) {

    const term =
        query.trim().toLowerCase();


    if (!term) {

        searchResultsSection.classList.add("hidden");

        searchResults.innerHTML = "";

        return;

    }


    const results = [];


    departmentNames.forEach(name => {

        const dept =
            departments[name];


        // Department search

        if (
            name.toLowerCase().includes(term) ||
            dept.description.toLowerCase().includes(term)
        ) {

            results.push({

                type: "Department",

                title: name,

                detail:
                    "Department overview and academic information.",

                action: () => {

                    selectDepartment(name);

                    scrollToPortal();

                }

            });

        }


        // Staff search

        dept.staff.forEach(member => {

            const staffText =
                `${member.name}
                ${member.designation}
                ${member.email}
                ${member.specialization}`
                    .toLowerCase();


            if (staffText.includes(term)) {

                results.push({

                    type: "Staff",

                    title: member.name,

                    detail:
                        `${member.designation} — ${name}. ${member.specialization}`,

                    action: () => {

                        selectDepartment(name);

                        selectDivision("staff");

                    }

                });

            }

        });


        // Laboratory search

        dept.laboratories.forEach(lab => {

            const labText =
                `${lab.name}
                ${lab.devices}
                ${lab.description}`
                    .toLowerCase();


            if (labText.includes(term)) {

                results.push({

                    type: "Laboratory",

                    title: lab.name,

                    detail:
                        `${name} — ${lab.devices} — ${lab.count} devices.`,

                    action: () => {

                        selectDepartment(name);

                        selectDivision("laboratory");

                    }

                });

            }

        });


        // Student search

        const student =
            dept.students;


        const studentText =
            `${name}
            ${student.count}
            ${student.classAdvisor}
            ${student.representatives.join(" ")}`
                .toLowerCase();


        if (studentText.includes(term)) {

            results.push({

                type: "Students",

                title: name,

                detail:
                    `${student.count} students (placeholder). Advisor: ${student.classAdvisor}.`,

                action: () => {

                    selectDepartment(name);

                    selectDivision("students");

                }

            });

        }

    });


    searchResultsSection.classList.remove("hidden");


    searchSummary.textContent =
        `${results.length} matching result${
            results.length === 1 ? "" : "s"
        } for “${query}”.`;


    if (!results.length) {

        searchResults.innerHTML = `

            <div class="search-result">

                <h3>
                    No matching information
                </h3>

                <p>
                    Try a department, staff name,
                    laboratory name or student-related term.
                </p>

            </div>

        `;

        return;

    }


    searchResults.innerHTML =
        results
            .map((result, index) => `

                <article class="search-result">

                    <h3>
                        ${escapeHtml(result.title)}
                    </h3>

                    <p>

                        <strong>
                            ${escapeHtml(result.type)}
                        </strong>

                        —

                        ${escapeHtml(result.detail)}

                    </p>


                    <button
                        class="btn btn-primary"
                        type="button"
                        data-search-result="${index}"
                        style="margin-top:10px;">

                        View Result

                    </button>

                </article>

            `)
            .join("");


    document
        .querySelectorAll("[data-search-result]")
        .forEach(button => {

            button.addEventListener("click", () => {

                results[
                    Number(button.dataset.searchResult)
                ].action();

                scrollToPortal();

            });

        });

}


// ============================================================
// SCROLL TO PORTAL
// ============================================================

function scrollToPortal() {

    document
        .getElementById("portal")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ============================================================
// MOBILE MENU
// ============================================================

function toggleMobileMenu() {

    const nav =
        document.getElementById("mainNav");

    const toggle =
        document.getElementById("menuToggle");


    const open =
        nav.classList.toggle("open");


    toggle.setAttribute(
        "aria-expanded",
        String(open)
    );


    toggle.setAttribute(
        "aria-label",
        open
            ? "Close navigation menu"
            : "Open navigation menu"
    );

}


function closeMobileMenu() {

    const nav =
        document.getElementById("mainNav");

    const toggle =
        document.getElementById("menuToggle");


    nav.classList.remove("open");


    toggle.setAttribute(
        "aria-expanded",
        "false"
    );


    toggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}


// ============================================================
// CLOSE DROPDOWNS
// ============================================================

function closeDropdowns() {

    document
        .querySelectorAll(".nav-dropdown")
        .forEach(dropdown => {

            dropdown.classList.remove("open");


            const toggle =
                dropdown.querySelector(".dropdown-toggle");


            if (toggle) {

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

}


// ============================================================
// CONTACT FORM
// ============================================================

function setupContactForm() {

    document
        .getElementById("contactForm")
        .addEventListener("submit", event => {

            event.preventDefault();


            const form =
                event.currentTarget;


            const message =
                document.getElementById("formMessage");


            if (!form.checkValidity()) {

                message.className =
                    "form-message error";

                message.textContent =
                    "Please complete all fields with valid information.";

                form.reportValidity();

                return;

            }


            message.className =
                "form-message success";


            message.textContent =
                "Thank you. This demonstration form has been validated successfully; no message was sent.";


            form.reset();

        });

}


// ============================================================
// SEARCH SETUP
// ============================================================

function setupSearch() {

    const input =
        document.getElementById("searchInput");


    document
        .getElementById("searchForm")
        .addEventListener("submit", event => {

            event.preventDefault();


            searchContent(input.value);


            if (input.value.trim()) {

                searchResultsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });


    input.addEventListener(
        "input",
        () => searchContent(input.value)
    );

}


// ============================================================
// PAGE INITIALIZATION
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeNavigation();

        renderDepartmentCards();

        renderDepartment();

        setupContactForm();

        setupSearch();


        // Mobile menu

        document
            .getElementById("menuToggle")
            .addEventListener(
                "click",
                toggleMobileMenu
            );


        // Explore Departments button

        document
            .querySelector('[data-action="explore"]')
            .addEventListener("click", () => {

                document
                    .getElementById("department-cards-title")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            });


        // Home navigation

        document
            .querySelectorAll('[data-nav="home"]')
            .forEach(link => {

                link.addEventListener("click", () => {

                    selectedDivision = "overview";

                    renderDepartment();

                    closeMobileMenu();

                });

            });


        // Close mobile menu after navigation

        document
            .querySelectorAll(".main-nav > a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            });

    }
);