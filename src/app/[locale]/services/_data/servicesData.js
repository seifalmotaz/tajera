import ux from "@/animations/ux.json";
import sec from "@/animations/sec.json";
import support2 from "@/animations/suport2.json";
import management from "@/animations/management.json";
import seo from "@/animations/seo.json";
import email from "@/animations/email.json";
import domain from "@/animations/domain.json";
import website from "@/animations/website.json";
import ecomm from "@/animations/ecomm.json";
import android from "@/animations/androud.json";
import erp from "@/animations/erp.json";
import support from "@/animations/support.json";
import host from "@/animations/host.json";
import web from "@/animations/web.json";
import crm from "@/animations/crm.json";
import oodo from "@/animations/Oodo.json";
export const allServices = {
  ar: [
    {
      id: 1,
      title: "إنشاء وتطوير المواقع الإلكترونية",
      img: website,
      dce: `نحن في تاچِيرا نقدم خدمة احترافية لإنشاء وتطوير المواقع الإلكترونية المصممة خصيصًا لتلبية احتياجات أعمالك وتعزيز تواجدك الرقمي. سواء كنت تحتاج إلى موقع تعريفي، موقع تعليمي، مدونة، أو منصة خدمية، فإننا نوفر لك حلولًا متكاملة تجمع بين التصميم الجذاب، الأداء العالي، وتجربة المستخدم الفريدة.`,
      features: [
        { title: "سيرفر سريع", icon: host },
        { title: "دومين مجاني", icon: domain },
        { title: "شهادة أمان", icon: sec },
        { title: "دعم فني", icon: support2 },
        { title: "لوحة تحكم", icon: management },
        { title: "تصميم واجهات", icon: ux },
        { title: "تحسين محركات البحث", icon: seo },
        { title: "تجربة مستخدم مميزة", icon: web },
        { title: "بريد إلكتروني مخصص", icon: email },
      ],
    },
    {
      id: 2,
      title: "إنشاء وتطوير المتاجر الإلكترونية",
      img: ecomm,
      dce: `نقدم حلولاً متكاملة للمتاجر الإلكترونية تساعدك في بيع منتجاتك وخدماتك بكل كفاءة. نضمن لك متجرًا إلكترونيًا سريعًا، آمنًا، وسهل الاستخدام مع دعم كامل لوسائل الدفع والشحن.`,
      features: [
        { title: "متجر متكامل", icon: host },
        { title: "بوابات دفع آمنة", icon: domain },
        { title: "إدارة المخزون", icon: sec },
        { title: "لوحة تحكم متقدمة", icon: support2 },
        { title: "تحليلات المبيعات", icon: management },
        { title: "تصميم متجاوب", icon: ux },
        { title: "تكامل مع الشحن", icon: seo },
        { title: "أمان عالي", icon: web },
        { title: "دعم فني دائم", icon: email },
      ],
    },
    {
      id: 3,
      title: "تصميم وتطوير تطبيقات الهاتف",
      img: android,
      dce: `نطور تطبيقات هاتف ذكية تلبي احتياجات عملك وتوفر تجربة مستخدم فريدة. تطبيقاتنا تعمل على منصتي iOS و Android مع ضمان الأداء العالي والأمان التام.`,
      features: [
        { title: "سيرفر وقاعدة بيانات", icon: host },
        { title: "حساب المطور", icon: domain },
        { title: "أمان", icon: sec },
        { title: "UI/UX", icon: ux },
        { title: "لوحة تحكم", icon: management },
        { title: "دعم فني", icon: support2 },
        { title: "نظام تخزين", icon: email },
        { title: "تجربة مستخدم", icon: web },
        { title: "دليل استخدام", icon: seo },
      ],
    },
    {
      id: 4,
      title: "استضافة المواقع الإلكترونية",
      img: host,
      dce: `نوفر حلول استضافة مواقع سريعة وآمنة مع معدل تشغيل يصل إلى 99.9%. استضافتنا تضمن لموقعك الأداء المثالي والحماية من الاختراقات مع دعم فني على مدار الساعة.`,
      features: [
        { title: "سيرفرات سريعة", icon: host },
        { title: "نسخ احتياطي يومي", icon: email },
        { title: "حماية متقدمة", icon: management },
        { title: "دعم فني فوري", icon: ux },
        { title: "نطاق مجاني", icon: domain },
        { title: "شهادة SSL", icon: sec },
      ],
    },
    {
      id: 5,
      title: "برمجة مواقع الويب",
      img: web,
      dce: `خدمات برمجة مواقع الويب المخصصة التي تلبي احتياجات عملك بدقة. نستخدم أحدث التقنيات لإنشاء مواقع سريعة، آمنة، وقابلة للتطوير مع ضمان جودة عالية.`,
      features: [
        { title: "برمجة مواقع ديناميكية واستاتيكية", icon: host },
        { title: "ربط الموقع بلوحات تحكم  ", icon: management },
        { title: "دعم فني فوري", icon: support },
      ],
    },
    {
      id: 6,
      title: "أنظمة CRM",
      img: management,
      dce: `نظم إدارة علاقات العملاء المصممة لتحسين تفاعلك مع عملائك وزيادة المبيعات. نوفر حلولاً ذكية تتيح لك تتبع العملاء وإدارة المبيعات والتسويق بكفاءة.`,
      features: [
        { title: "إدارة العملاء", icon: host },
        { title: "تتبع المبيعات", icon: domain },
        { title: "تقارير متقدمة", icon: sec },
        { title: "أتمتة التسويق", icon: support2 },
        { title: "تحليلات البيانات", icon: management },
        { title: "تكامل مع الأنظمة", icon: ux },
        { title: "واجهة سهلة", icon: seo },
        { title: "حلول مخصصة", icon: web },
        { title: "دعم وتدريب", icon: email },
      ],
    },
    {
      id: 7,
      title: "أنظمة ERP",
      img: erp,
      dce: `حلول ERP متكاملة لإدارة جميع عمليات شركتك من نظام واحد. نوفر أنظمة مخصصة تساعدك في إدارة الموارد البشرية، المحاسبة، المخزون، والمزيد بكفاءة عالية.`,
      features: [
        { title: "تصميم وتطوير نظام ERP مخصص", icon: host },
        { title: "نظام سهل الاستخدام وآمن", icon: domain },
        {
          title: "ربط شامل بين أقسام الشركة لتوفير الوقت  ",
          icon: sec,
        },
        { title: "دعم فني مستمر وتحديثات حسب الحاجة", icon: support2 },
        { title: "تقارير تحليلية في الوقت الفعلي", icon: management },
        {
          title: "إدارة الموارد البشرية، الحسابات، المخزون",
          icon: web,
        },
      ],
    },
    {
      id: 8,
      title: "أنظمة Odoo",
      img: oodo,
      dce: `تطوير وتخصيص أنظمة Odoo لتناسب احتياجات عملك بالكامل. نوفر حلولاً شاملة لإدارة كافة جوانب شركتك من نظام واحد سهل الاستخدام.`,
      features: [
        { title: "تخصيص وبرمجة نظام Odoo حسب احتياجاتك", icon: host },
        {
          title:
            "إدارة كاملة للمحاسبة، الموارد، المبيعات، المخازن، وخدمة العملاء",
          icon: domain,
        },
        { title: "تقارير ذكية وتحليلات لحظية لأداء شركتك", icon: web },
        { title: "تكامل مع الموقع الإلكتروني والتطبيقات", icon: management },
        { title: "المبيعات والمخزون", icon: sec },
        { title: "المحاسبة والتمويل", icon: support },
      ],
    },
    {
      id: 9,
      title: "الدعم الفني",
      img: support,
      dce: `خدمات الدعم الفني الشاملة لضمان عمل أنظمتك بسلاسة وكفاءة. نقدم دعمًا فوريًا لحل المشكلات التقنية وصيانة الأنظمة باحترافية عالية.`,
      features: [
        { title: "دعم فوري", icon: host },
        { title: "صيانة دورية", icon: domain },
        { title: "مراقبة مستمرة", icon: sec },
        { title: "حل المشكلات", icon: support2 },
        { title: "تحديثات أمنية", icon: management },
        { title: "نسخ احتياطي", icon: ux },
        { title: "تقارير الأداء", icon: support },
        { title: "استشارات تقنية", icon: web },
        { title: "خدمة 24/7", icon: email },
      ],
    },
  ],
  en: [
    {
      id: 1,
      title: "Website Development",
      img: website,
      dce: `At Tajera, we provide professional website development services tailored to meet your business needs and enhance your digital presence. Our comprehensive solutions combine attractive design, high performance, and unique user experience for all types of websites.`,
      features: [
        { title: "Fast Servers", icon: host },
        { title: "Free Domain", icon: domain },
        { title: "Security Certificates", icon: sec },
        { title: "Technical Support", icon: support2 },
        { title: "Control Panel", icon: management },
        { title: "UI/UX Design", icon: ux },
        { title: "SEO Optimization", icon: seo },
        { title: "User Experience", icon: web },
        { title: "Custom Email", icon: email },
      ],
    },
    {
      id: 2,
      title: "E-commerce Development",
      img: ecomm,
      dce: `Complete e-commerce solutions to efficiently sell your products and services. We deliver fast, secure, and user-friendly online stores with full payment and shipping integration.`,
      features: [
        { title: "Complete Store", icon: host },
        { title: "Secure Payment", icon: domain },
        { title: "Inventory Management", icon: sec },
        { title: "Advanced Dashboard", icon: support2 },
        { title: "Sales Analytics", icon: management },
        { title: "Responsive Design", icon: ux },
        { title: "Shipping Integration", icon: seo },
        { title: "High Security", icon: web },
        { title: "24/7 Support", icon: email },
      ],
    },
    {
      id: 3,
      title: "Mobile App Development",
      img: android,
      dce: `We develop smart mobile applications that meet your business needs with unique user experiences. Our apps work on both iOS and Android platforms with guaranteed high performance and complete security.`,
      features: [
        { title: "Server & Database", icon: host },
        { title: "Developer Account", icon: domain },
        { title: "Security", icon: sec },
        { title: "UI/UX", icon: ux },
        { title: "Dashboard", icon: management },
        { title: "Technical Support", icon: support2 },
        { title: "Storage System", icon: email },
        { title: "User Experience", icon: web },
        { title: "User Guide", icon: seo },
      ],
    },
    {
      id: 4,
      title: "Web Hosting",
      img: host,
      dce: `Fast and secure web hosting solutions with 99.9% uptime. Our hosting ensures optimal performance and protection against breaches with 24/7 technical support.`,
      features: [
        { title: "Fast Servers", icon: host },
        { title: "Daily Backup", icon: email },
        { title: "Advanced Protection", icon: management },
        { title: "Instant Technical Support", icon: ux },
        { title: "Free Domain", icon: domain },
        { title: "SSL Certificate", icon: sec },
      ],
    },
    {
      id: 5,
      title: "Web Programming",
      img: ux,
      dce: `Custom web programming services that precisely meet your business needs. We use the latest technologies to create fast, secure, and scalable websites with guaranteed high quality.`,
      features: [
        { title: "Custom Development", icon: ux },
        { title: "Modern Technologies", icon: ux },
        { title: "Clean Code", icon: ux },
        { title: "Scalable Solutions", icon: ux },
        { title: "Quality Testing", icon: ux },
        { title: "High Security", icon: ux },
        {
          title: "Full Documentation",
          icon: ux,
        },
        { title: "Ongoing Maintenance", icon: ux },
        {
          title: "Performance Optimization",
          icon: ux,
        },
      ],
    },
    {
      id: 6,
      title: "CRM Systems",
      img: management,
      dce: `Customer relationship management systems designed to improve customer interactions and boost sales. We provide smart solutions for customer tracking, sales, and marketing management.`,
      features: [
        { title: "Customer Management", icon: host },
        { title: "Sales Tracking", icon: domain },
        { title: "Advanced Reports", icon: sec },
        { title: "Marketing Automation", icon: support2 },
        { title: "Data Analytics", icon: management },
        { title: "System Integration", icon: ux },
        {
          title: "User-Friendly Interface",
          icon: seo,
        },
        { title: "Custom Solutions", icon: web },
        { title: "Training & Support", icon: email },
      ],
    },
    {
      id: 7,
      title: "ERP Systems",
      img: erp,
      dce: `Integrated ERP solutions to manage all your company operations from one system. We provide customized systems for efficient HR, accounting, inventory, and more.`,
      features: [
        { title: "Custom ERP System Design & Development", icon: host },
        { title: "User-Friendly and Secure System", icon: domain },
        {
          title: "Comprehensive Integration Across Departments to Save Time",
          icon: sec,
        },
        {
          title: "Continuous Technical Support and Updates as Needed",
          icon: support2,
        },
        { title: "Real-Time Analytical Reports", icon: management },
        { title: "HR, Accounting, and Inventory Management", icon: web },
      ],
    },
    {
      id: 8,
      title: "Odoo Systems",
      img: oodo,
      dce: `Odoo system development and customization to fully match your business needs. We provide comprehensive solutions to manage all aspects of your company from one easy-to-use system.`,
      features: [
        {
          title: "Customize and Develop Odoo System Based on Your Needs",
          icon: host,
        },
        {
          title:
            "Comprehensive Management of Accounting, HR, Sales, Inventory, and Customer Service",
          icon: domain,
        },
        {
          title:
            "Smart Reports and Real-Time Analytics for Your Company's Performance",
          icon: web,
        },
        {
          title: "Integration with Website and Applications",
          icon: management,
        },
        { title: "Sales and Inventory", icon: sec },
        { title: "Accounting and Finance", icon: support },
      ],
    },
    {
      id: 9,
      title: "Technical Support",
      img: support,
      dce: `Comprehensive technical support services to ensure your systems run smoothly and efficiently. We provide immediate support for technical issues and professional system maintenance.`,
      features: [
        { title: "Immediate Support", icon: host },
        { title: "Regular Maintenance", icon: domain },
        {
          title: "Continuous Monitoring",
          icon: sec,
        },
        { title: "Problem Resolution", icon: support2 },
        { title: "Security Updates", icon: management },
        { title: "Data Backup", icon: ux },
        { title: "Performance Reports", icon: support },
        { title: "Technical Consulting", icon: web },
        { title: "24/7 Service", icon: email },
      ],
    },
  ],
};
