import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaEye,
  FaCode,
  FaRocket,
  FaUsers,
  FaAward,
  FaCalendarAlt,
  FaJava,
  FaJs,
  FaAws
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGraphql,
  SiKotlin,
  SiTypescript,
  SiAngular,
  SiNextdotjs,
  SiRedux,
  SiMaterialdesign
} from 'react-icons/si';
import './project.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "FastCode Platform",
      description: "Enterprise developer tools suite with API Builder, BPMN Workflow, Authentication, and Code Generation capabilities.",
      longDescription: "A comprehensive platform that streamlines enterprise app development using Java, Spring Boot, and Angular. Features include automated CRUD generation, workflow management, and modular authentication systems.",
      image: "/fastcode.png",
      category: "enterprise",
      status: "Production",
      year: "2022-2024",
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
        { name: "AWS", icon: <FaAws />, color: "#ff9900" }
      ],
      features: [
        "API Builder & CodeGen",
        "BPMN & DMN Workflow Tools",
        "Authentication & Authorization",
        "Logging & Exception Handling",
        "Email Template Builder",
        "Audit Framework"
      ],
      impact: "Reduced development time by 60% for standard CRUD operations",
      links: {
        live: "https://fastcode.eximia.com",
        github: "https://github.com/eximia/fastcode"
      },
      featured: true
    },
    {
      id: 2,
      title: "BookingForm SaaS Platform",
      description: "Complete SaaS booking system with dynamic pricing, payment integration, and admin dashboards.",
      longDescription: "A comprehensive booking platform developed individually for v1 and led as team lead for v2. Features include real-time trip tracking, multi-payment support, and customizable themes.",
      image: "/form.png",
      category: "saas",
      status: "Production",
      year: "2021-2023",
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "React", icon: <SiReact />, color: "#61dafb" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "AWS", icon: <FaAws />, color: "#ff9900" }
      ],
      features: [
        "Dynamic Pricing Engine",
        "Stripe & PayPal Integration",
        "Real-time Trip Tracking",
        "Role-based Dashboards",
        "Invoice Workflows",
        "Admin Analytics"
      ],
      impact: "Served 1000+ bookings with 99.9% uptime",
      links: {
        live: "https://bookingform-staging.com",
        github: "https://github.com/eximia/bookingform"
      },
      featured: true
    },
    {
      id: 3,
      title: "iFamily Mobile App",
      description: "Cross-platform family connection app with intelligent role-based matching and real-time chat.",
      longDescription: "A comprehensive mobile application built with Ionic 7 + Angular 17 and Spring Boot 3 backend. Features intelligent family matching algorithms and multi-provider authentication.",
      image: "/ifam.jpg",
      category: "mobile",
      status: "Production",
      year: "2020-2023",
      technologies: [
        { name: "Ionic", icon: <FaCode />, color: "#3880ff" },
        { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "Firebase", icon: <FaCode />, color: "#ffca28" },
        { name: "AWS S3", icon: <FaAws />, color: "#ff9900" }
      ],
      features: [
        "Role-based Family Matching",
        "Multi-provider Authentication",
        "Real-time Chat with TalkJS",
        "FCM Push Notifications",
        "Multi-language Support",
        "Location-based Discovery"
      ],
      impact: "Connected 500+ families across multiple countries",
      links: {
        live: "https://ifamily.org",
        github: "https://github.com/mnaeem99/ifamily"
      },
      featured: true
    },
    {
      id: 4,
      title: "Yumscore Restaurant App",
      description: "Social restaurant discovery app with GraphQL backend and Google Maps integration.",
      longDescription: "A restaurant social app built with Kotlin + Spring Boot + GraphQL backend and React + MUI frontend. Integrated with Google Maps API and AWS services for scalability.",
      image: "/yumscore.png",
      category: "web",
      status: "Production",
      year: "2022-2023",
      technologies: [
        { name: "Kotlin", icon: <SiKotlin />, color: "#7f52ff" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "GraphQL", icon: <SiGraphql />, color: "#e10098" },
        { name: "React", icon: <SiReact />, color: "#61dafb" },
        { name: "Material-UI", icon: <SiMaterialdesign />, color: "#0081cb" },
        { name: "AWS", icon: <FaAws />, color: "#ff9900" }
      ],
      features: [
        "Restaurant Discovery",
        "Google Maps Integration",
        "Social Features",
        "Admin Dashboards",
        "Real-time Updates",
        "Mobile Responsive"
      ],
      impact: "Featured 2000+ restaurants with 4.8/5 user rating",
      links: {
        live: "https://yumscore.app",
        github: "https://github.com/eximia/yumscore"
      },
      featured: false
    },
    {
      id: 5,
      title: "Leave Management System",
      description: "Employee leave management system with workflow automation and approval processes.",
      longDescription: "A comprehensive leave management system for Eximia employees built with Node.js + React. Features automated workflows, approval processes, and reporting capabilities.",
      image: "/LMS.jpg",
      category: "web",
      status: "Production",
      year: "2021-2022",
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "React", icon: <SiReact />, color: "#61dafb" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "AWS", icon: <FaAws />, color: "#ff9900" }
      ],
      features: [
        "Leave Request Workflow",
        "Approval Management",
        "Calendar Integration",
        "Reporting Dashboard",
        "Email Notifications",
        "Mobile Responsive"
      ],
      impact: "Streamlined leave management for 200+ employees",
      links: {
        live: "http://44.223.43.55/",
        github: "https://github.com/eximia/leave-management"
      },
      featured: false
    },
    {
      id: 6,
      title: "Circular-X Inventory System",
      description: "AI-based inventory management system with Shopify API integration and automated product upload.",
      longDescription: "An intelligent inventory management system that uses AI for product categorization and automated upload to Shopify. Features include barcode scanning, automated pricing, and inventory tracking.",
      image: "/circularx.png",
      category: "ai",
      status: "Production",
      year: "2022-2023",
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Shopify API", icon: <FaCode />, color: "#96bf48" },
        { name: "AI/ML", icon: <FaCode />, color: "#ff6b6b" }
      ],
      features: [
        "AI Product Categorization",
        "Shopify API Integration",
        "Barcode Scanning",
        "Automated Pricing",
        "Inventory Tracking",
        "Analytics Dashboard"
      ],
      impact: "Automated 80% of product upload processes",
      links: {
        live: "https://circular-x.com",
        github: "https://github.com/eximia/circular-x"
      },
      featured: false
    },
    {
      id: 7,
      title: "Nsoroma Tracking System",
      description: "Real-time vehicle tracking and fuel management system with comprehensive reporting for fleet administrators.",
      longDescription: "Built a comprehensive fleet management system with real-time vehicle tracking, fuel monitoring, and automated reporting. Features scheduling and queue-based processing for metrics tracking and alert generation.",
      image: "/nsoroma.jpg",
      category: "tracking",
      status: "Production",
      year: "2021-2022",
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "Angular", icon: <SiAngular />, color: "#dd0031" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "MySQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Quartz", icon: <FaCode />, color: "#ff6b6b" }
      ],
      features: [
        "Real-time Vehicle Tracking",
        "Fuel Management & Monitoring",
        "Automated Reporting System",
        "Scheduling & Queue Processing",
        "Metrics Tracking & Analytics",
        "Alert & Notification System"
      ],
      impact: "Improved fleet efficiency by 35% and reduced fuel costs by 20%",
      links: {
        live: "http://20.163.15.59:8080/",
        github: "https://github.com/mnaeem99/nsoroma-tracking"
      },
      featured: true
    },
    {
      id: 8,
      title: "Tesia Appointment Booking",
      description: "RESTful APIs for doctor-patient appointment scheduling with calendar views and automated reminders.",
      longDescription: "Developed comprehensive appointment booking system for healthcare providers with RESTful APIs, calendar integration, and automated reminder system for improved patient care management.",
      image: "/tesia.png",
      category: "web",
      status: "Production",
      year: "2021-2022",
      technologies: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "REST API", icon: <FaCode />, color: "#61dafb" },
        { name: "Calendar", icon: <FaCalendarAlt />, color: "#ff6b6b" }
      ],
      features: [
        "Doctor-Patient Scheduling",
        "Calendar Integration",
        "Automated Reminders",
        "RESTful API Design",
        "Appointment Management",
        "Notification System"
      ],
      impact: "Streamlined appointment booking for 50+ healthcare providers",
      links: {
        live: "https://tesia.pe",
        github: "https://github.com/tesia-appointments"
      },
      featured: true
    },
    {
      id: 9,
      title: "Cricket Stats API",
      description: "Backend API to sync and expose cricket player stats using cron jobs from third-party API.",
      longDescription: "Built a comprehensive cricket statistics API that automatically syncs player data from third-party sources using scheduled cron jobs. Features real-time stats updates and efficient data management.",
      image: "/cricket.png",
      category: "api",
      status: "Production",
      year: "2022-2023",
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express", icon: <SiNodedotjs />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
        { name: "Cron Jobs", icon: <FaCode />, color: "#ff6b6b" },
        { name: "REST API", icon: <FaCode />, color: "#61dafb" }
      ],
      features: [
        "Player Stats Synchronization",
        "Automated Cron Jobs",
        "Third-party API Integration",
        "Real-time Data Updates",
        "RESTful Endpoints",
        "Data Caching & Optimization"
      ],
      impact: "Served 10,000+ API requests daily with 99.8% uptime",
      links: {
        live: "https://babar56.com",
        github: "https://github.com/musman013/cricket-stats-api"
      },
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'enterprise', name: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length },
    { id: 'saas', name: 'SaaS', count: projects.filter(p => p.category === 'saas').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'web', name: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'tracking', name: 'Tracking', count: projects.filter(p => p.category === 'tracking').length },
    { id: 'api', name: 'API', count: projects.filter(p => p.category === 'api').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <p>Some of my recent work and side projects</p>
        </motion.div>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn"
                      >
                        <FaEye />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <FaAward />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-status">{project.status}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.slice(0, 6).map((tech, index) => (
                    <div 
                      key={index}
                      className="tech-tag"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                  {project.technologies.length > 6 && (
                    <div className="tech-more">
                      +{project.technologies.length - 6} more
                    </div>
                  )}
                </div>

                <div className="project-impact">
                  <FaRocket />
                  <span>{project.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

