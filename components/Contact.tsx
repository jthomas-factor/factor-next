'use client';
import { RiMap2Line, RiSmartphoneLine } from 'react-icons/ri';
import Form from './Form';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Contact = () => {
  return (
    <section id="contact" className="pt-16 xl:pt-36">
      <motion.div
        variants={fadeIn('up', 0.1)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full shadow p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent bg-white">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <div className="flex flex-col gap-[40px] mb-16">
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMap2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Stop by our office.</p>
                    <p className="font-semibold text-primary">
                      Corporate Headquarters
                      <br />
                      209 10th Ave. S., Suite 560
                      <br />
                      Nashville, TN 37203
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-primary">
                      +1 615 321 4848
                    </p>
                    <p className="font-semibold text-primary">
                      +1 202 891 6000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <h3 className="h3 mb-3">Request Information</h3>
              <p className="mb-9">
                At FACTOR, our strength is built on collaboration. We partner
                with top-tier firms and industry leaders to deliver integrated,
                innovative solutions that drive mission success.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
