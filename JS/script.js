//start nav bar

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('Mo');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollProgress = document.querySelector('.scroll-progress');

    // تأثير التمرير على الناف بار
    window.addEventListener('scroll', function () {
        // إضافة/إزالة كلاس scrolled
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // تحديث مؤشر التمرير
        updateScrollProgress();

        // تفعيل الروابط النشطة
        highlightActiveNavLink();
    });

    // تحديث مؤشر التمرير
    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.scrollY / documentHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    }

    // تحديد الرابط النشط بناءً على الموقع
    function highlightActiveNavLink() {
        let currentSection = '';
        const sections = document.querySelectorAll('section[id], header[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (href === `#${currentSection}` ||
                (currentSection === 'head' && href === '#head')) {
                link.classList.add('active');
            }
        });
    }

    // إغلاق القائمة المتنقلة عند النقر على رابط (للشاشات الصغيرة)
    const navCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // تأثير hover على الروابط
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // تأثيرات إضافية للناف بار
    window.addEventListener('load', function () {
        // تأثير ظهور تدريجي للناف بار
        navbar.style.opacity = '0';
        navbar.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            navbar.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            navbar.style.opacity = '1';
            navbar.style.transform = 'translateY(0)';
        }, 300);

        // تحديث مؤشر التمرير الأولي
        updateScrollProgress();
        highlightActiveNavLink();
    });

    // تأثير عند النقر على الروابط
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // لمنع السلوك الافتراضي للروابط الفارغة
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // تأثير النقر
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);

                    // التمرير السلس
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // تأثير خاص لزر السيرة الذاتية
    const cvButtons = document.querySelectorAll('.nav-cv-btn, .cv-download-btn');

    cvButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });

        button.addEventListener('click', function () {
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);

            // تتبع النقر (اختياري)
            console.log('CV download button clicked');
        });
    });
});

//end nav bar

//start header section

document.addEventListener('DOMContentLoaded', function() {
    const dynamicText = document.querySelector('.dynamic-text');
    const texts = ['web developer','frontend developer','UI/UX enthusiast','problem solver'];
    let currentIndex = 0, charIndex = 0, isDeleting = false;
    const typingSpeed = 150;

    function typeEffect() {
        const currentText = texts[currentIndex];
        if(!isDeleting && charIndex < currentText.length){
            dynamicText.textContent = currentText.substring(0,charIndex+1);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if(isDeleting && charIndex>0){
            dynamicText.textContent = currentText.substring(0,charIndex-1);
            charIndex--;
            setTimeout(typeEffect, typingSpeed/2);
        } else {
            isDeleting = !isDeleting;
            if(!isDeleting) currentIndex=(currentIndex+1)%texts.length;
            setTimeout(typeEffect,800);
        }
    }
    setTimeout(typeEffect,1000);

    // scroll parallax خفيف
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        document.querySelector('#head').style.backgroundPositionY = `${scrollTop*0.2}px`;
    });
});

//end header section
// about-script.js
document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');
    const aboutImg = document.querySelector('.about-img img');
    const techTags = document.querySelectorAll('.tech-tag');

    // تأثير عند المرور على الصورة
    if (aboutImg) {
        aboutImg.addEventListener('mouseenter', function () {
            this.style.transform = 'translateZ(40px) scale(1.05)';
            this.style.filter = 'grayscale(0%) contrast(1.2) brightness(1.1)';
        });

        aboutImg.addEventListener('mouseleave', function () {
            this.style.transform = 'translateZ(20px) scale(1)';
            this.style.filter = 'grayscale(20%) contrast(1.1) brightness(1.05)';
        });
    }

    // تأثيرات للتقنيات
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });

        tag.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // تأثير ظهور عند التمرير
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');

                // تفعيل تأثيرات إضافية
                const shapes = entry.target.querySelectorAll('.decoration-shape');
                shapes.forEach((shape, index) => {
                    shape.style.animationDelay = `${index * 0.5}s`;
                });
            }
        });
    }, observerOptions);

    if (aboutSection) {
        observer.observe(aboutSection);
    }
});
// end about-script.js
// education-script.js
document.addEventListener('DOMContentLoaded', function () {
    const educationSection = document.getElementById('Education');
    const tabButtons = document.querySelectorAll('.nav-ed-btn');
    const progressBars = document.querySelectorAll('.progress-bar');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const techIcons = document.querySelectorAll('.tech-icon');

    // تأثير عند التبديل بين التبويبات
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // إزالة النشاط من جميع الأزرار
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة النشاط للزر المحدد
            this.classList.add('active');

            // تأثير تحريك
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });

    // تحريك أشرطة التقدم عند الظهور
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });

                // إظهار عناصر الجدول الزمني بالتتابع
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        item.style.transition = 'all 0.5s ease';

                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    if (educationSection) {
        progressObserver.observe(educationSection);
    }

    // تأثيرات لأيقونات التقنيات
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) rotate(10deg) scale(1.2)';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });

        // تأثير النقر
        icon.addEventListener('click', function () {
            const techName = this.getAttribute('title');
            if (techName) {
                this.style.transform = 'scale(1.5)';
                this.style.color = '#2E0249';

                setTimeout(() => {
                    this.style.transform = '';
                    this.style.color = '';
                }, 300);

                console.log(`Selected technology: ${techName}`);
            }
        });
    });

    // تأثيرات للبطاقات
    const educationCards = document.querySelectorAll('.education-card, .course-card');

    educationCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(-5px)';
        });
    });

    // تأثيرات للروابط
    const links = document.querySelectorAll('.edu-website-link, .course-link-btn');

    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
});

// skills-script.js
document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.getElementById('Skills');
    const skillCards = document.querySelectorAll('.skill-card');
    const progressBars = document.querySelectorAll('.skill-progress .progress-bar');
    const tabButtons = document.querySelectorAll('.nav-skills-btn');
    const softSkillCards = document.querySelectorAll('.soft-skill-card');

    // تحميل أشرطة التقدم
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const skillCard = bar.closest('.skill-card');
            const skillLevel = skillCard.getAttribute('data-skill-level');
            bar.style.width = '0%';

            setTimeout(() => {
                bar.style.width = skillLevel + '%';
                bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 300);
        });
    }

    // تأثيرات للمهارات التقنية
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.05)';

            // تأثير اهتزاز خفيف للأيقونة
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.animation = 'vibrate 0.3s ease';
                setTimeout(() => {
                    icon.style.animation = '';
                }, 300);
            }
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        // تأثير عند النقر
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });

    // تأثيرات للمهارات اللينة
    softSkillCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.soft-skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(15deg)';
                icon.style.background = 'linear-gradient(135deg, var(--accent-color), var(--primary-color))';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.soft-skill-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.background = 'linear-gradient(135deg, var(--secondary-color), var(--accent-color))';
            }
        });
    });

    // تأثير التبديل بين التبويبات
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // إزالة النشاط من جميع الأزرار
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // إضافة النشاط للزر المحدد
            this.classList.add('active');

            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);

            // إعادة تحميل أشرطة التقدم عند تبديل التبويبات
            setTimeout(() => {
                animateProgressBars();
            }, 500);
        });
    });

    // تأثير عند التمرير إلى القسم
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تفعيل أشرطة التقدم
                animateProgressBars();

                // تأثير ظهور للبطاقات
                const skillCards = entry.target.querySelectorAll('.skill-card, .soft-skill-card');
                skillCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // تأثيرات خاصة للبطاقات عند الظهور لأول مرة
    setTimeout(() => {
        const allCards = document.querySelectorAll('.skill-card, .soft-skill-card, .summary-card');
        allCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300 + (index * 100));
        });
    }, 1000);

    // تأثيرات للرموز التعليمية
    const techLearningIcons = document.querySelectorAll('.tech-learning img');
    techLearningIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.filter = 'grayscale(0%) brightness(1)';
            this.style.transform = 'scale(1.2) rotate(10deg)';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.filter = 'grayscale(100%) brightness(1.5)';
            this.style.transform = '';
        });
    });

    // تأثيرات للرابط الخارجي
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);

            // رسالة تأكيد
            console.log('Opening external link:', this.href);
        });
    });

    // تعريف تأثير الاهتزاز
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vibrate {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(-2px) rotate(-1deg); }
            75% { transform: translateX(2px) rotate(1deg); }
        }
    `;
    document.head.appendChild(style);
});

// projects-script.js
document.addEventListener('DOMContentLoaded', function () {
    const projectsSection = document.getElementById('Projects');
    const projectCards = document.querySelectorAll('.project-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const statNumbers = document.querySelectorAll('.stat-number');

    // تصفية المشاريع
    function filterProjects(category) {
        projectItems.forEach(item => {
            if (category === 'all') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                const categories = item.getAttribute('data-categories');
                if (categories.includes(category)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            }
        });
    }

    // تفعيل أزرار التصفية
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // إزالة النشاط من جميع الأزرار
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = '';
            });

            // إضافة النشاط للزر المحدد
            this.classList.add('active');

            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);

            // تطبيق التصفية
            const filterValue = this.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });

    // تأثيرات للمشاريع
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-20px) scale(1.05)';

            // تفعيل النقاط العائمة
            const dots = this.querySelectorAll('.dot');
            dots.forEach(dot => {
                dot.style.animationPlayState = 'running';
            });

            // تأثير للصورة
            const img = this.querySelector('.project-img');
            if (img) {
                img.style.transform = 'scale(1.15)';
            }
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(-15px) scale(1.02)';

            // إيقاف النقاط العائمة
            const dots = this.querySelectorAll('.dot');
            dots.forEach(dot => {
                dot.style.animationPlayState = 'paused';
            });

            // إعادة الصورة
            const img = this.querySelector('.project-img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });

        // تأثير عند النقر
        card.addEventListener('click', function (e) {
            // منع التأثير عند النقر على الروابط
            if (!e.target.closest('a')) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-15px) scale(1.02)';
                }, 150);
            }
        });
    });

    // عدادات الإحصائيات
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const increment = target / 50;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);

                // إضافة علامات الآلاف للأرقام الكبيرة
                if (target >= 1000) {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, 20);
        });
    }

    // تأثيرات للروابط
    const projectLinks = document.querySelectorAll('.project-link:not(.disabled)');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.link-icon');
            if (icon) {
                icon.style.transform = 'translateX(5px) rotate(10deg)';
                icon.style.color = 'var(--accent-color)';
            }
        });

        link.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.link-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
    });

    // تأثيرات للأزرار
    const actionButtons = document.querySelectorAll('.live-demo-btn, .source-code-btn, .view-more-btn');
    actionButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });

        button.addEventListener('click', function (e) {
            if (this.getAttribute('href')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);

                console.log('Opening link:', this.href);
            }
        });
    });

    // تأثيرات للأيقونات الاجتماعية
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.2) rotate(5deg)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // تأثير عند التمرير إلى القسم
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تفعيل العدادات
                animateCounters();

                // تأثير ظهور للمشاريع
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';

                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    if (projectsSection) {
        projectsObserver.observe(projectsSection);
    }

    // تأثيرات خاصة للمشروع القادم
    const comingSoonCard = document.querySelector('.coming-soon-project');
    if (comingSoonCard) {
        const progressBar = comingSoonCard.querySelector('.progress-bar');

        setInterval(() => {
            progressBar.style.width = '65%';
            setTimeout(() => {
                progressBar.style.width = '70%';
            }, 1000);
        }, 2000);
    }

    // إضافة تأثيرات للبيانات الإحصائية عند التحميل
    setTimeout(() => {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300 + (index * 100));
        });
    }, 1500);
});

// contact-script.js
document.addEventListener('DOMContentLoaded', function () {
    const contactSection = document.getElementById('contact');
    const socialItems = document.querySelectorAll('.social-item');
    const detailLinks = document.querySelectorAll('.detail-link');
    const quickMessageInput = document.getElementById('quickMessage');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const currentYearSpan = document.getElementById('currentYear');

    // تحديث السنة الحالية
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // تأثيرات لوسائل التواصل الاجتماعي
    socialItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px) scale(1.05)';

            // تأثير اهتزاز خفيف للأيقونة
            const icon = this.querySelector('.social-icon');
            if (icon) {
                icon.style.animation = 'vibrate 0.3s ease';
                setTimeout(() => {
                    icon.style.animation = '';
                }, 300);
            }
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        // تأثير عند النقر
        item.addEventListener('click', function (e) {
            if (this.id !== 'downloadCvBtn') {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);

                // تتبع النقر (اختياري)
                const platform = this.classList.contains('facebook') ? 'Facebook' :
                    this.classList.contains('github') ? 'GitHub' :
                        this.classList.contains('linkedin') ? 'LinkedIn' :
                            this.classList.contains('email') ? 'Email' :
                                this.classList.contains('whatsapp') ? 'WhatsApp' : 'Unknown';
                console.log(`Opening ${platform} link`);
            }
        });
    });

    // زر تحميل السيرة الذاتية
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function () {
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);

            // محاكاة تحميل السيرة الذاتية
            const downloadUrl = 'cv/Mohamed Elsebaiy Cv.pdf';

            // إنشاء رابط تحميل مؤقت
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'Mohamed_Elsebaiy_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // رسالة تأكيد
            showNotification('Downloading CV...', 'info');
        });
    }

    // زر إرسال الرسالة السريعة
    if (sendMessageBtn && quickMessageInput) {
        sendMessageBtn.addEventListener('click', function () {
            const message = quickMessageInput.value.trim();

            if (message) {
                // تأثير النقر
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);

                // إنشاء رابط البريد الإلكتروني
                const email = 'mohamed.elseb3iy@gmail.com';
                const subject = 'Message from Portfolio Website';
                const body = encodeURIComponent(message);
                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

                // فتح عميل البريد الإلكتروني
                window.open(mailtoLink, '_blank');

                // إعادة تعيين الحقل
                quickMessageInput.value = '';

                // رسالة تأكيد
                showNotification('Opening email client...', 'success');
            } else {
                // تأثير اهتزاز للحقل الفارغ
                quickMessageInput.style.animation = 'shake 0.5s ease';
                setTimeout(() => {
                    quickMessageInput.style.animation = '';
                }, 500);

                showNotification('Please enter a message', 'error');
            }
        });

        // إرسال عند الضغط على Enter
        quickMessageInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                sendMessageBtn.click();
            }
        });
    }

    // زر العودة إلى الأعلى
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function () {
            // تأثير النقر
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);

            // التمرير السلس إلى الأعلى
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // تفعيل تأثير إضافي
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    icon.style.transform = '';
                }, 500);
            }
        });

        // إظهار/إخفاء الزر عند التمرير
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
                backToTopBtn.style.transform = 'translateY(0)';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
                backToTopBtn.style.transform = 'translateY(10px)';
            }
        });
    }

    // تأثيرات للروابط
    detailLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
            this.style.color = 'var(--accent-color)';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.color = '';
        });
    });

    // تأثير ظهور عند التمرير إلى القسم
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // تفعيل تأثيرات للعناصر داخل القسم
                const socialGrid = entry.target.querySelector('.social-grid');
                if (socialGrid) {
                    const items = socialGrid.querySelectorAll('.social-item');
                    items.forEach((item, index) => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';

                        setTimeout(() => {
                            item.style.transition = 'all 0.5s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    if (contactSection) {
        contactObserver.observe(contactSection);
    }

    // وظيفة عرض الإشعارات
    function showNotification(message, type) {
        // إنشاء عنصر الإشعار
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // إضافة الأنماط
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '1rem 1.5rem';
        notification.style.borderRadius = '10px';
        notification.style.color = 'white';
        notification.style.fontWeight = '500';
        notification.style.zIndex = '9999';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'all 0.3s ease';

        // ألوان حسب النوع
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            notification.style.boxShadow = '0 5px 15px rgba(76, 175, 80, 0.3)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
            notification.style.boxShadow = '0 5px 15px rgba(244, 67, 54, 0.3)';
        } else {
            notification.style.background = 'linear-gradient(135deg, var(--accent-color), var(--primary-color))';
            notification.style.boxShadow = '0 5px 15px rgba(193, 71, 233, 0.3)';
        }

        // إضافة إلى الصفحة
        document.body.appendChild(notification);

        // إظهار الإشعار
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);

        // إخفاء الإشعار بعد 3 ثوان
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';

            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // إضافة تأثير الاهتزاز
    const style = document.createElement('style');
    style.textContent = `
        @keyframes vibrate {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(-2px) rotate(-1deg); }
            75% { transform: translateX(2px) rotate(1deg); }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);

    // تأثيرات خاصة للقلب النابض
    const heart = document.querySelector('.heart-pulse');
    if (heart) {
        setInterval(() => {
            heart.style.transform = 'scale(1.3)';
            setTimeout(() => {
                heart.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    }

    // تأثيرات للأمواج
    const waves = document.querySelectorAll('.wave');
    waves.forEach((wave, index) => {
        wave.style.animationDelay = `${index * 2}s`;
    });
});