import { Link } from "react-router-dom";
import cn from "classnames";
import s from './index.module.css';

const Service = () => {
  return (
    <div className={s.content}>
      <div className={s['page-title']}>
        <h1 className={s.title}>Terms of Service</h1>
        <div className={s.timestamp}>Latest update: March 21, 2023</div>
      </div>
      <section className={s.section}>
        <p className={cn(s.text, s['text-margin'])}>The following document describes the conditions of use of our Websites and Services.</p>
        <p className={cn(s.text, s['text-margin'])}>KhulnaSoft, Ltd. ("MLChain") is a US company whose registered office is located at 651 N BROAD ST SUITE 201, Delaware, USA, under the file number 7358523 and represented by Mr. Luyu Zhang, its CEO.</p>
        <p className={s.text}>MLChain is pleased to give you access to MLChain's website (<Link className={cn(s.text, s.link)} to="/">mlchain.github.io</Link>) ("Website"), and related applications and resources (collectively, the "Services"). Your use of the Services is subject to the binding legal agreement set forth below ("Terms").</p>
      </section>
      <section className={s.section}>
        <h2 className={s.h2}>Beta Software</h2>
        <p className={s.text}>We may provide you with beta and experimental products, features, and documentation ("Beta Software") on an early access basis. Beta Software is not generally available and may contain errors, defects, and inaccuracies. We provide Beta Software "as is" without any warranties and may terminate Beta Software at any time without ensuring the preservation of Beta Software data. Our service level agreements do not apply to Beta Software. If Beta Software becomes generally available, you may choose to pay for the software or stop using it. We may use your feedback on Beta Software.</p>
      </section>
      <section className={s.section}>
        <h2 className={s.h2}>Usage of MLChain Services</h2>
        <p className={cn(s.text, s['text-margin'])}>You may use the MLChain development platform to create software applications for your target user group to achieve your commercial objectives. You understand and acknowledge that the language and information generated by software applications created based on MLChain are derived from user-written prompts and their Large Language Model (LLM) providers (such as OpenAI). LLM is an immature technology, and any negative consequences arising from the language and information generated are not related to MLChain, especially if you commercialize the application but fail to meet your operational expectations (including but not limited to not meeting your advertising description expectations, target effect description expectations, etc.) or experience service interruptions.</p>
        <p className={s.text}>The development of prompts for LLM models is the core product capability and service provided by MLChain. During your use of MLChain for prompt engineering, embedding, fine-tuning, and testing of LLM models, additional resource consumption may occur. By registering or starting to use MLChain, you agree to the potential consumption of resources and costs associated with the LLM algorithms of this product. You should closely monitor billing changes from third-party LLM providers. You shall bear all consequences of any abnormal consumption and billing issues that prevent you from using MLChain services normally.</p>
      </section>
      <section className={s.section}>
        <h2 className={s.h2}>Intellectual Property</h2>
        <p className={s.text}>The Services, logo, interfaces, photos, Websites are owned by KhulnaSoft, Ltd. or its licensees and protected by applicable law, with all rights reserved. MLChain takes the protection of intellectual property rights, including copyrights, very seriously. MLChain will terminate your access to, or use of, all or any part of the Services, without notice to you, if you infringe or misappropriate the intellectual property rights, including copyrights, of others.</p>
      </section>
      <section className={s.section}>
        <h2 className={s.h2}>Applicable Law</h2>
        <p className={s.text}>The Terms are governed by the laws of the State of California, United States.</p>
      </section>
  </div>
  );
};

export default Service;
  