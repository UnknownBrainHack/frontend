import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Droparea from '../components/ui/Droparea';
import Dragon from '../images/RussianDragon.png';
import Tabs from '../components/ui/Tabs';
import Button from '../components/ui/Button';

export default function Item() {
  return (
    <motion.section
      className="section__container"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
      transition={{ duration: 0.2 }}
    >
      <section>
        <Droparea disabled image={Dragon} />
      </section>
      <section className="section__creator">
        <h4>Hey there</h4>
        <div className="creator__container">
          <p>Creator</p>
          <div className="creator__user">
            <Image src={Dragon} alt="" />
            <span className="creator__name">Mike Wazowski</span>
          </div>
        </div>
        <Tabs>
          <div title="Rates">
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
          </div>
          <div title="Experts">
            <div className="experts__wrapper">
              <div className="experts__image">
                <Image src={Dragon} alt="" />
              </div>
              <div className="experts__user">
                <span className="experts__name">Johnny Wreck</span>
                <p>
                  Rate: <span>2 ETH</span>
                </p>
                <p>
                  Date: <span>2 July</span>
                </p>
              </div>
            </div>
            <div className="experts__wrapper">
              <div className="experts__image">
                <Image src={Dragon} alt="" />
              </div>
              <div className="experts__user">
                <span className="experts__name">Johnny Wreck</span>
                <p>
                  Rate: <span>2 ETH</span>
                </p>
                <p>
                  Date: <span>2 July</span>
                </p>
              </div>
            </div>
            <div className="experts__wrapper">
              <div className="experts__image">
                <Image src={Dragon} alt="" />
              </div>
              <div className="experts__user">
                <span className="experts__name">Johnny Wreck</span>
                <p>
                  Rate: <span>2 ETH</span>
                </p>
                <p>
                  Date: <span>2 July</span>
                </p>
              </div>
            </div>
            <div className="experts__wrapper">
              <div className="experts__image">
                <Image src={Dragon} alt="" />
              </div>
              <div className="experts__user">
                <span className="experts__name">Johnny Wreck</span>
                <p>
                  Rate: <span>2 ETH</span>
                </p>
                <p>
                  Date: <span>2 July</span>
                </p>
              </div>
            </div>
          </div>
        </Tabs>
        <Button>Buy for 2.525 ETH</Button>
        <Button secondary>Rate item</Button>
      </section>
    </motion.section>
  );
}
