import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, CalendarCheck, CreditCard, BarChart3, 
  MessageSquare, FileText, ArrowRight,
  LayoutDashboard, Play, CheckCircle2
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.overflowX = "hidden";
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div style={styles.pageWrapper}>
      
      {/* --- BACKROUND ELEMENTS TO REDUCE WHITE SPACE --- */}
      <div style={styles.bgBlob1}></div>
      <div style={styles.bgBlob2}></div>
      <div style={styles.bgGrid}></div>

      {/* 1. NAVBAR */}
      <nav style={styles.navStyle}>
        <div style={styles.navContainer}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={styles.logoBox}><LayoutDashboard size={20} color="white" /></div>
            <h2 style={styles.logoText}>Civic<span style={{ color: "#4f46e5" }}>HRMS</span></h2>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button onClick={() => navigate("/Login")} style={styles.btnGhost}>Log in</button>
            <button onClick={() => navigate("/signup")} style={styles.btnPrimaryNav}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={styles.promoBadge}>
            ✨ Trusted by 500+ Local Governments
          </motion.div>
          
          <motion.h1 {...fadeInUp} style={styles.heroTitle}>
            The Operating System for <br />
            <span style={styles.gradientText}>Modern Human Resources</span>
          </motion.h1>
          
          <motion.p {...fadeInUp} transition={{ delay: 0.1 }} style={styles.heroSubtitle}>
            Streamline payroll, automate attendance, and empower your workforce with a 
            single, secure platform built for the future of work.
          </motion.p>
          
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} style={styles.heroBtnGroup}>
            <button onClick={() => navigate("/signup")} style={styles.btnHeroPrimary}>
              Start Building <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate("/login")} style={styles.btnHeroSecondary}>
              <Play size={16} fill="currentColor" /> Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURE GRID */}
      <section style={styles.sectionLayout}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={styles.sectionHeader}>Everything you need to scale</h2>
          <p style={styles.sectionSubHeader}>Powerful modules designed for modern administration.</p>
        </div>

        <div style={styles.grid}>
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              style={styles.featureCard}
            >
              <div style={styles.iconBox}>{f.icon}</div>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TRUST BAR */}
      <section style={styles.trustSection}>
        <div style={styles.benefitGrid}>
          {benefits.map((b, i) => (
            <div key={i} style={styles.benefitItem}>
              <CheckCircle2 size={18} color="#4f46e5" />
              <span style={{ fontSize: "15px", fontWeight: "600", color: "#475569" }}>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section style={{ padding: "100px 24px", boxSizing: "border-box", position: "relative" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          style={styles.ctaBox}
        >
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: "800", marginBottom: "20px" }}>
            Ready to digitize your HR?
          </h2>
          <p style={{ fontSize: "18px", opacity: 0.9, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
            Join forward-thinking companies who have already automated their operations.
          </p>
          <button onClick={() => navigate("/signup")} style={styles.btnWhite}>
            Create Your Account Now
          </button>
        </motion.div>
      </section>

      {/* 6. FOOTER */}
      <footer style={styles.footerStyle}>
        <div style={styles.footerContainer}>
          <div style={styles.logoTextSmall}>Civic<span style={{color: '#4f46e5'}}>HRMS</span></div>
          <div style={{ color: "#94a3b8", fontSize: "14px" }}>
            © {new Date().getFullYear()} CivicHRMS. Built for professionals.
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ===== DATA ===== */
const features = [
  { icon: <CalendarCheck size={24} />, title: "Smart Attendance", desc: "Geofenced and QR-based clock-ins with automated timesheets." },
  { icon: <FileText size={24} />, title: "Digital Leaves", desc: "Customizable leave policies with multi-level approval chains." },
  { icon: <CreditCard size={24} />, title: "Seamless Payroll", desc: "One-click salary disbursements and tax compliance reports." },
  { icon: <Users size={24} />, title: "Staff Directory", desc: "Secure cloud storage for all sensitive employee documentation." },
  { icon: <BarChart3 size={24} />, title: "HR Analytics", desc: "Real-time data on employee retention and productivity." },
  { icon: <MessageSquare size={24} />, title: "AI HR-Bot", desc: "Automated responses for policy queries and leave balances." },
];

const benefits = ["JWT 256-bit Security", "Role-Based Permissions", "Cloud Data Residency", "24/7 Priority Support"];

/* ===== CSS OBJECTS ===== */
const styles = {
  pageWrapper: { 
    fontFamily: "'Inter', sans-serif", 
    color: "#0f172a", 
    backgroundColor: "#ffffff", 
    width: "100%", 
    minWidth: "100vw", 
    overflowX: "hidden", 
    margin: 0, 
    padding: 0,
    boxSizing: "border-box",
    position: "relative" // Needed for absolute blobs
  },

  // NEW BACKGROUND ELEMENTS
  bgBlob1: {
    position: "fixed",
    top: "-10%",
    right: "-5%",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, rgba(255,255,255,0) 70%)",
    borderRadius: "50%",
    zIndex: 0,
    pointerEvents: "none"
  },
  bgBlob2: {
    position: "fixed",
    bottom: "10%",
    left: "-5%",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, rgba(255,255,255,0) 70%)",
    borderRadius: "50%",
    zIndex: 0,
    pointerEvents: "none"
  },
  bgGrid: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "radial-gradient(#e2e8f0 0.5px, transparent 0.5px)",
    backgroundSize: "30px 30px",
    opacity: 0.4,
    zIndex: 0,
    pointerEvents: "none"
  },

  navStyle: { 
    position: "sticky", 
    top: 0, 
    zIndex: 100, 
    background: "rgba(255, 255, 255, 0.8)", 
    backdropFilter: "blur(12px)", 
    borderBottom: "1px solid #f1f5f9",
    width: "100%",
    boxSizing: "border-box"
  },
  navContainer: { 
    maxWidth: "1200px", 
    margin: "0 auto", 
    padding: "14px 24px", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box"
  },
  logoBox: { background: "#4f46e5", padding: "8px", borderRadius: "10px", display: "flex" },
  logoText: { margin: 0, fontSize: "20px", fontWeight: "800", letterSpacing: "-0.5px" },
  
  heroSection: { 
    padding: "120px 20px", 
    background: "transparent", // Changed to show blobs
    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1
  },
  heroContent: { maxWidth: "1000px", margin: "0 auto" },
  promoBadge: { display: "inline-block", padding: "8px 16px", borderRadius: "100px", background: "#eef2ff", color: "#4338ca", fontSize: "13px", fontWeight: "600", marginBottom: "32px", border: "1px solid #e0e7ff" },
  heroTitle: { fontSize: "clamp(42px, 6vw, 72px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "28px", letterSpacing: "-1.5px" },
  gradientText: { background: "linear-gradient(90deg, #4f46e5, #9333ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSubtitle: { fontSize: "20px", color: "#475569", maxWidth: "680px", margin: "0 auto", lineHeight: "1.6" },
  heroBtnGroup: { display: "flex", gap: "16px", justifyContent: "center", marginTop: "48px", flexWrap: "wrap" },
  
  sectionLayout: { 
    padding: "100px 24px", 
    maxWidth: "1200px", 
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1
  },
  sectionHeader: { fontSize: "40px", fontWeight: "800", color: "#1e293b", marginBottom: "16px" },
  sectionSubHeader: { fontSize: "19px", color: "#64748b" },
  
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
    gap: "30px",
    width: "100%",
    boxSizing: "border-box"
  },
  featureCard: { 
    padding: "40px", 
    borderRadius: "24px", 
    background: "rgba(255,255,255,0.7)", // Slightly transparent
    backdropFilter: "blur(10px)",
    border: "1px solid #f1f5f9", 
    transition: "0.3s ease", 
    cursor: "pointer", 
    textAlign: "left" 
  },
  iconBox: { width: "52px", height: "52px", background: "#f1f5f9", color: "#4f46e5", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" },
  cardTitle: { fontSize: "20px", fontWeight: "700", marginBottom: "12px" },
  cardDesc: { color: "#64748b", lineHeight: "1.7", fontSize: "15px" },
  
  trustSection: { 
    padding: "50px 20px", 
    background: "rgba(248, 250, 252, 0.8)", 
    borderTop: "1px solid #f1f5f9", 
    borderBottom: "1px solid #f1f5f9",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1
  },
  benefitGrid: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" },
  benefitItem: { display: "flex", alignItems: "center", gap: "10px" },
  
  ctaBox: { 
    background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", 
    color: "white", 
    padding: "100px 40px", 
    borderRadius: "40px", 
    textAlign: "center", 
    maxWidth: "1100px", 
    margin: "0 auto", 
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
    boxSizing: "border-box"
  },
  
  btnPrimaryNav: { background: "#4f46e5", color: "white", border: "none", padding: "10px 22px", borderRadius: "10px", fontWeight: "600", cursor: "pointer" },
  btnGhost: { background: "transparent", border: "none", color: "#475569", fontWeight: "600", cursor: "pointer" },
  btnHeroPrimary: { background: "#4f46e5", color: "white", padding: "18px 36px", border: "none", borderRadius: "14px", fontSize: "17px", fontWeight: "600", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" },
  btnHeroSecondary: { background: "white", color: "#1e293b", padding: "18px 36px", border: "1px solid #e2e8f0", borderRadius: "14px", fontSize: "17px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" },
  btnWhite: { background: "white", color: "#4f46e5", padding: "20px 44px", border: "none", borderRadius: "14px", fontSize: "17px", fontWeight: "700", cursor: "pointer" },
  
  footerStyle: { 
    padding: "60px 24px", 
    background: "transparent", 
    borderTop: "1px solid #f1f5f9",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1
  },
  footerContainer: { maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" },
  logoTextSmall: { fontSize: "19px", fontWeight: "800" },
};

export default LandingPage;