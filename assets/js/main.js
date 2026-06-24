(function () {
    'use strict';

    var yearNode = document.getElementById('currentYear');
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    function closeMobileNav() {
        var collapse = document.getElementById('navbarSupportedContent');
        if (collapse && collapse.classList.contains('show') && window.jQuery) {
            window.jQuery(collapse).collapse('hide');
        }
    }

    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
        link.addEventListener('click', closeMobileNav);
    });

    window.addEventListener('scroll', function () {
        var nav = document.getElementById('mainNav');
        if (!nav) return;
        if (window.scrollY > 40) {
            nav.classList.add('is-scrolled');
        } else {
            nav.classList.remove('is-scrolled');
        }
    });

    function initPortfolioFiltering() {
        var grid = document.querySelector('.projects-grid');
        if (!grid || typeof Isotope === 'undefined') return;

        var iso = new Isotope(grid, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
            percentPosition: true
        });

        document.querySelectorAll('.filter-btn').forEach(function (button) {
            button.addEventListener('click', function () {
                document.querySelectorAll('.filter-btn').forEach(function (btn) {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                iso.arrange({ filter: button.getAttribute('data-filter') });
            });
        });

        window.addEventListener('resize', function () {
            iso.layout();
        });
    }

    function buildResumeHtml() {
        var date = new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <div style="font-family: Inter, Arial, sans-serif; color: #0f172a; background: #ffffff; line-height: 1.45;">
                <div style="padding: 0.25in;">
                    <div style="text-align:center; padding-bottom: 12px; border-bottom: 3px solid #2563eb; margin-bottom: 14px;">
                        <h1 style="font-size: 34px; margin: 0; letter-spacing: -0.03em; color:#0f172a;">SHASHI SHANKER</h1>
                        <p style="font-size: 16px; margin: 5px 0; color:#2563eb; font-weight: 700;">Senior Full Stack Engineer | .NET | Angular | AI | Genesys</p>
                        <p style="font-size: 12.5px; margin: 2px 0; color:#475569;">Delhi NCR, India | shashi.shanker@example.com</p>
                        <p style="font-size: 12.5px; margin: 2px 0; color:#475569;">LinkedIn: https://www.linkedin.com/in/sshanker272/ | GitHub: https://github.com/sshanker50</p>
                    </div>

                    <section style="margin-bottom: 13px;">
                        <h2 style="font-size: 17px; color:#0f172a; margin: 0 0 6px; padding-bottom: 4px; border-bottom: 2px solid #2563eb;">PROFESSIONAL SUMMARY</h2>
                        <p style="font-size: 12.8px; margin: 0; color:#334155;">
                            Senior Full Stack Engineer with 7+ years of experience building enterprise-grade .NET, Angular, AI and Genesys Cloud solutions. Experienced in ASP.NET MVC, ASP.NET Core, Web API, Entity Framework, LINQ, Dapper, SQL Server, PostgreSQL, AWS, Azure, CI/CD, clean architecture, CQRS, MediatR, microservices, OpenAI, RAG, AI agents, semantic search and contact center automation.
                        </p>
                    </section>

                    <section style="margin-bottom: 13px;">
                        <h2 style="font-size: 17px; color:#0f172a; margin: 0 0 6px; padding-bottom: 4px; border-bottom: 2px solid #2563eb;">TECHNICAL SKILLS</h2>
                        <table style="width:100%; font-size: 12.5px; border-collapse: collapse; color:#334155;">
                            <tr><td style="padding:2px 0;"><strong>Backend:</strong> .NET Framework, .NET Core, .NET 8, ASP.NET MVC, ASP.NET Core, Web API, Entity Framework, LINQ, Dapper, Repository Pattern</td></tr>
                            <tr><td style="padding:2px 0;"><strong>Frontend:</strong> Angular, TypeScript, JavaScript, jQuery, HTML5, CSS3, Bootstrap</td></tr>
                            <tr><td style="padding:2px 0;"><strong>Databases:</strong> SQL Server, PostgreSQL, Amazon Athena</td></tr>
                            <tr><td style="padding:2px 0;"><strong>Cloud & DevOps:</strong> AWS, Azure, Jenkins, GitHub Actions, CI/CD</td></tr>
                            <tr><td style="padding:2px 0;"><strong>Architecture:</strong> Clean Architecture, CQRS, MediatR, Microservices</td></tr>
                            <tr><td style="padding:2px 0;"><strong>AI:</strong> OpenAI, Prompt Engineering, RAG, AI Agents, Semantic Search</td></tr>
                            <tr><td style="padding:2px 0;"><strong>Contact Center:</strong> Genesys Cloud, Secure Pause, Call Analytics, Contact Center Automation, Agent Workflows</td></tr>
                        </table>
                    </section>

                    <section style="margin-bottom: 13px;">
                        <h2 style="font-size: 17px; color:#0f172a; margin: 0 0 6px; padding-bottom: 4px; border-bottom: 2px solid #2563eb;">WORK EXPERIENCE</h2>

                        <div style="margin-bottom: 10px;">
                            <div style="display:flex; justify-content:space-between; gap:20px; font-size: 14px; font-weight: 800; color:#0f172a;">
                                <span>Senior Software Developer - Qualfon India</span>
                                <span style="color:#475569; white-space:nowrap;">Aug 2023 - Present</span>
                            </div>
                            <ul style="margin: 5px 0 0 18px; padding:0; font-size: 12.5px; color:#334155;">
                                <li>Lead full-stack development for enterprise contact center systems, Genesys Cloud integrations, AI-enabled analytics and secure workflows.</li>
                                <li>Delivered automation-first solutions for agent productivity, PCI-sensitive call handling and interaction intelligence.</li>
                                <li><strong>Technologies:</strong> .NET 8, ASP.NET Core, Angular, SQL Server, Genesys Cloud, OpenAI, REST APIs, AWS, Azure, CI/CD.</li>
                            </ul>
                        </div>

                        <div style="margin-bottom: 10px;">
                            <div style="display:flex; justify-content:space-between; gap:20px; font-size: 14px; font-weight: 800; color:#0f172a;">
                                <span>Senior Software Developer - SprigHub</span>
                                <span style="color:#475569; white-space:nowrap;">Jan 2021 - Aug 2023</span>
                            </div>
                            <ul style="margin: 5px 0 0 18px; padding:0; font-size: 12.5px; color:#334155;">
                                <li>Built scalable web applications, APIs, data-driven modules and reusable backend services for enterprise clients.</li>
                                <li>Strengthened maintainability through clean architecture, optimized database access and modular service design.</li>
                                <li><strong>Technologies:</strong> .NET Core, ASP.NET Core, Angular, TypeScript, SQL Server, Entity Framework, Dapper, Web API, Bootstrap.</li>
                            </ul>
                        </div>

                        <div style="margin-bottom: 5px;">
                            <div style="display:flex; justify-content:space-between; gap:20px; font-size: 14px; font-weight: 800; color:#0f172a;">
                                <span>Full Stack Developer - Entab Infotech</span>
                                <span style="color:#475569; white-space:nowrap;">Dec 2019 - Jan 2021</span>
                            </div>
                            <ul style="margin: 5px 0 0 18px; padding:0; font-size: 12.5px; color:#334155;">
                                <li>Developed full-stack business applications, UI modules, REST APIs, reporting workflows and SQL-driven features.</li>
                                <li>Improved delivery quality by aligning backend services, frontend components and database design with practical business workflows.</li>
                                <li><strong>Technologies:</strong> ASP.NET MVC, .NET Framework, Web API, JavaScript, jQuery, HTML5, CSS3, Bootstrap, SQL Server.</li>
                            </ul>
                        </div>
                    </section>

                    <section style="margin-bottom: 13px;">
                        <h2 style="font-size: 17px; color:#0f172a; margin: 0 0 6px; padding-bottom: 4px; border-bottom: 2px solid #2563eb;">KEY PROJECTS</h2>

                        <div style="margin-bottom: 8px;">
                            <p style="font-size: 13.2px; font-weight: 800; margin: 0; color:#0f172a;">QScript Platform</p>
                            <p style="font-size: 12.4px; margin: 2px 0; color:#334155;">Enterprise dynamic scripting platform for contact center agents with personalized workflows, configurable questions and integration capabilities.</p>
                            <p style="font-size: 12px; margin: 0; color:#2563eb;">.NET Core | Angular | SQL Server | REST APIs</p>
                        </div>

                        <div style="margin-bottom: 8px;">
                            <p style="font-size: 13.2px; font-weight: 800; margin: 0; color:#0f172a;">Genesys Secure Pause Automation</p>
                            <p style="font-size: 12.4px; margin: 2px 0; color:#334155;">Windows monitoring application that automatically triggers Genesys Secure Pause during PCI-sensitive activities.</p>
                            <p style="font-size: 12px; margin: 0; color:#2563eb;">.NET | Windows APIs | Genesys Cloud</p>
                        </div>

                        <div style="margin-bottom: 8px;">
                            <p style="font-size: 13.2px; font-weight: 800; margin: 0; color:#0f172a;">AI Contact Center Insights</p>
                            <p style="font-size: 12.4px; margin: 2px 0; color:#334155;">AI-powered analytics solution for call summaries, sentiment analysis and agent performance insights.</p>
                            <p style="font-size: 12px; margin: 0; color:#2563eb;">.NET 8 | Angular | OpenAI</p>
                        </div>

                        <div style="margin-bottom: 8px;">
                            <p style="font-size: 13.2px; font-weight: 800; margin: 0; color:#0f172a;">Enterprise AI Copilot</p>
                            <p style="font-size: 12.4px; margin: 2px 0; color:#334155;">Chat with enterprise knowledge base, documents and business data using RAG architecture.</p>
                            <p style="font-size: 12px; margin: 0; color:#2563eb;">.NET 8 | OpenAI | Angular | RAG</p>
                        </div>

                        <div style="margin-bottom: 4px;">
                            <p style="font-size: 13.2px; font-weight: 800; margin: 0; color:#0f172a;">Marketing Spend Optimizer</p>
                            <p style="font-size: 12.4px; margin: 2px 0; color:#334155;">Marketing analytics platform integrating social media channels for ROI and campaign performance metrics.</p>
                            <p style="font-size: 12px; margin: 0; color:#2563eb;">.NET | Angular | SQL Server</p>
                        </div>
                    </section>

                    <section style="margin-bottom: 13px;">
                        <h2 style="font-size: 17px; color:#0f172a; margin: 0 0 6px; padding-bottom: 4px; border-bottom: 2px solid #2563eb;">CERTIFICATIONS</h2>
                        <ul style="margin: 5px 0 0 18px; padding:0; font-size: 12.5px; color:#334155;">
                            <li>ASP.NET Core MVC</li>
                            <li>Angular & TypeScript</li>
                            <li>C#</li>
                            <li>SQL Advanced</li>
                        </ul>
                    </section>

                    <div style="text-align:center; border-top:1px solid #e2e8f0; padding-top: 8px; font-size: 10.5px; color:#64748b;">
                        Shashi Shanker - Senior Full Stack Engineer | Resume updated ${date}
                    </div>
                </div>
            </div>
        `;
    }

    async function generatePDFResume() {
        var loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) loadingOverlay.classList.add('active');

        try {
            if (typeof html2pdf === 'undefined') {
                throw new Error('html2pdf is not loaded.');
            }

            var resumeContent = document.createElement('div');
            resumeContent.innerHTML = buildResumeHtml();

            var options = {
                margin: [0.45, 0.45, 0.45, 0.45],
                filename: 'Shashi_Shanker_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, letterRendering: true, logging: false },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            await html2pdf().from(resumeContent).set(options).save();
        } catch (error) {
            console.error('PDF Generation Error:', error);
            alert('Unable to generate the PDF right now. Please check your internet connection and try again.');
        } finally {
            if (loadingOverlay) loadingOverlay.classList.remove('active');
        }
    }

    function bindDownloadButtons() {
        ['downloadResumeBtn', 'navDownloadBtn', 'modalDownloadBtn'].forEach(function (id) {
            var button = document.getElementById(id);
            if (!button) return;

            button.addEventListener('click', function (event) {
                event.preventDefault();
                if (id === 'modalDownloadBtn' && window.jQuery) {
                    window.jQuery('#profileModal').modal('hide');
                    setTimeout(generatePDFResume, 260);
                } else {
                    generatePDFResume();
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initPortfolioFiltering();
        bindDownloadButtons();
    });
})();
