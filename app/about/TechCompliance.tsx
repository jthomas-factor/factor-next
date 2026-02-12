'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Button from '@/components/Button';

const TechCompliance = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.2 }}
      className="container flex flex-col gap-12"
    >
      <motion.div
        variants={fadeIn('up', 0.2)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="h3">Our Technology</h3>
          <p>
            GIS underpins much of the work that we do. Our engineers and
            consultants work with industry-leading Esri software such as ArcGIS
            (client, server, and embedded in custom applications). We also
            frequently leverage interactive mapping technologies, such as
            Leaflet, in concert with SQL spatial databases in our custom web
            maps and applications.
          </p>
          <p>
            To meet our clients&apos; complex needs, we regularly develop custom
            software solutions that combine modern components, cloud
            architecture, and advanced security.
          </p>
        </div>
      </motion.div>

      {/* SOC 2 */}
      <motion.div
        variants={fadeIn('up', 0.4)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="h3 col-span-6">SOC 2&reg; Compliant</h3>
          <div className="grid grid-cols-6 items-center gap-6">
            <Image
              src="/about/soc2.png"
              alt="SOC 2 compliance certification badge for secure software systems"
              width={200}
              height={200}
            />
            <p className="col-span-4">
              To meet our clients&apos; complex needs, we regularly develop
              custom software solutions that combine modern components, cloud
              architecture, and advanced security.
            </p>
          </div>
        </div>
      </motion.div>

      {/* NIST */}
      <motion.div
        variants={fadeIn('up', 0.6)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="h3">NIST SP 800-171 Compliant</h3>
          <p>
            FACTOR&apos;s commitment to protect Controlled Unclassified
            Information (CUI) is highlighted through our compliance with the
            NIST SP 800-171 framework, and our systems, processes, and workforce
            are fully aligned with this rigorous standard. For government
            customers, this certification translates to reliable and consistent
            security that satisfies DFARS and other procurement requirements,
            accelerating contract awards and minimizing risk. For commercial
            industry and our teaming partners, this brings enterprise-grade data
            protection and a highly vetted cybersecurity posture you can trust
            with your most sensitive information.
          </p>
          <p>
            To meet our clients&apos; complex needs, we regularly develop custom
            software solutions that combine modern components, cloud
            architecture, and advanced security.
          </p>
        </div>
      </motion.div>

      {/* Federal Contracts */}
      <motion.div
        variants={fadeIn('up', 0.2)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-col gap-4">
          <h3 className="h3">Federal Contracts</h3>
          <p>
            Federal clients can access FACTOR through our GSA and FAA contracts.
            Click below for more information.
          </p>
          <Button text="Contract Vehicles" link="contract-vehicles" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TechCompliance;
