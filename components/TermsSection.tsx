"use client";

import styles from "./TermsSection.module.css";

export default function TermsSection() {
  return (
    <article className={styles.termsWrapper}>
      <header className={`${styles.header} reveal`}>
        <h1 className={styles.mainTitle}>BOOKING POLICIES & TERMS AND CONDITIONS</h1>
        <div className={styles.divider} />
      </header>

      <div className={styles.contentBody}>
        {/* Section 1 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>1. Booking & Deposit Policy</h2>
          <p>To secure your appointment at Chi Botanical, a non-refundable £50 deposit is required at the time of booking. The remaining balance will be taken on the day of your appointment.</p>
          <p>Please note:</p>
          <ul className={styles.list}>
            <li>Deposits are strictly non-refundable and non-transferable.</li>
            <li>Your appointment is only confirmed once the deposit has been received.</li>
            <li>A valid payment card must remain on file for any outstanding balances, late cancellation fees, or no-show charges.</li>
          </ul>
          <p>Failure to settle outstanding balances may result in refusal of future bookings. By booking with Chi Botanical, you authorise us to process any remaining balances or policy-related charges using the card provided at booking.</p>
        </section>

        {/* Section 2 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>2. Cancellation & Rescheduling Policy</h2>
          <p>We understand that unforeseen circumstances can occasionally arise. However, last-minute cancellations and missed appointments significantly impact our business and other clients.</p>
          
          <h3 className={styles.subTitle}>Standard Cancellation Policy</h3>
          <ul className={styles.list}>
            <li>Appointments must be cancelled or rescheduled with a minimum of 48 hours&apos; notice.</li>
            <li>Cancellations made within 24 hours of the appointment will result in the loss of the 50% deposit.</li>
            <li>The remaining 50% balance may also be charged to the card on file.</li>
            <li>No-shows will be charged the full treatment amount.</li>
            <li>Deposits, payments, and fees are non-refundable and non-transferable.</li>
            <li>Repeated late cancellations or missed appointments may result in refusal of future bookings.</li>
          </ul>
          <p>The cancellation policy applies in all circumstances, including illness, unless otherwise agreed at management discretion.</p>

          <h3 className={styles.subTitle}>How to Contact Us Regarding Appointments</h3>
          <p>All cancellations, rescheduling requests, or lateness notifications must be made via:</p>
          <ul className={styles.list}>
            <li>Email (Preferred as it provides a clear written timestamp)</li>
            <li>WhatsApp</li>
          </ul>
          <p>Please note:</p>
          <ul className={styles.list}>
            <li>Phone calls, missed calls, social media messages, or text messages are not accepted as official notice.</li>
            <li>As we are often in treatment with clients throughout the day, it is the client&apos;s responsibility to ensure written notice has been received.</li>
            <li>If no valid written communication is received, the appointment will be treated under the cancellation and no-show policy.</li>
          </ul>
          <p>Our contact details are available on the Chi Botanical website and booking confirmations.</p>
        </section>

        {/* Section 3 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>3. Late Arrival Policy</h2>
          <p>Please arrive on time to ensure you receive your full treatment experience. Late arrivals may reduce treatment time and disrupt the schedule for following clients.</p>
          
          <h3 className={styles.subTitle}>Flexible Treatments</h3>
          <p>For certain treatments such as <strong>Treatments 60 min or longer</strong> and the <strong>Lift & Release Facial</strong>, we may be able to accommodate arrivals up to 10 minutes late, however:</p>
          <ul className={styles.list}>
            <li>Treatment time may be shortened.</li>
            <li>Full treatment charges will still apply.</li>
          </ul>

          <h3 className={styles.subTitle}>Time-Sensitive Treatments</h3>
          <p>For treatments including <strong>Multi-Step Facials</strong> and <strong>Advanced Skin Treatments</strong>, clients arriving more than 10 minutes late may not be accommodated. In these circumstances:</p>
          <ul className={styles.list}>
            <li>The deposit will be forfeited.</li>
            <li>The remaining treatment balance may still be charged.</li>
          </ul>
          <p>If lateness affects the following appointment schedule, Chi Botanical reserves the right to refuse service while applying the full treatment fee.</p>
        </section>

        {/* Section 4 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>4. Health, Safety & Treatment Suitability</h2>
          <p>Your health and safety are our priority. Before treatment, all clients are required to complete a consultation form and disclose any relevant medical conditions, allergies, medications, skin conditions, recent cosmetic procedures, pregnancy status, injuries, or surgeries.</p>
          <p>Clients must inform us as soon as possible if they develop:</p>
          <ul className={styles.list}>
            <li>Cold sores, conjunctivitis, rashes, infections, open wounds, or any contagious condition.</li>
          </ul>
          <p>If treatment is deemed unsafe upon arrival, we reserve the right to refuse treatment. If this falls within the cancellation window, the full appointment fee may still apply.</p>
          <p>Treatment results vary between individuals and cannot be guaranteed. Clients are responsible for following all aftercare advice provided by Chi Botanical. Failure to follow aftercare instructions may affect results, and Chi Botanical cannot accept liability for this.</p>
          <p>We reserve the right to postpone or refuse treatment where contraindications, hygiene concerns, or safety risks are present.</p>
          <p>All personal and medical information is handled securely and confidentially in accordance with current UK data protection legislation.</p>
        </section>

        {/* Section 5 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>5. Pregnancy & Medical Conditions</h2>
          <p>If you are pregnant, breastfeeding, or undergoing medical treatment, please inform us before booking. Certain treatments may need to be adjusted, postponed, or avoided entirely for safety reasons. Chi Botanical will always do our best to recommend the safest and most suitable treatment options.</p>
        </section>

        {/* Section 6 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>6. Age Policy</h2>
          <ul className={styles.list}>
            <li>Clients must be aged 16 or over for treatments.</li>
            <li>Clients under 18 may require parental or guardian consent.</li>
            <li>A parent or legal guardian may be required to attend the appointment.</li>
            <li>Proof of age may be requested.</li>
          </ul>
          <p>Certain advanced treatments are strictly 18+.</p>
        </section>

        {/* Section 7 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>7. Photography & Treatment Records</h2>
          <p>Before and after photographs may be taken for treatment records and progress tracking. All images remain confidential unless written consent is provided for marketing or social media purposes.</p>
        </section>

        {/* Section 8 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>8. Promotions, Offers & Gift Vouchers</h2>
          <ul className={styles.list}>
            <li>Promotional offers cannot be combined unless stated otherwise.</li>
            <li>Offers are non-transferable and cannot be exchanged for cash.</li>
            <li>Expired offers cannot be extended.</li>
            <li>Gift vouchers are non-refundable and must be redeemed before their expiry date.</li>
            <li>Chi Botanical reserves the right to withdraw or amend promotions at any time.</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>9. Pricing & Treatment Updates</h2>
          <p>Prices, treatment durations, and services may change without prior notice. The Chi Botanical website and booking system will always display the most up-to-date pricing and treatment information. We reserve the right to modify, discontinue, or update treatments where necessary.</p>
        </section>

        {/* Section 10 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>10. Privacy & Data Protection</h2>
          <p>Chi Botanical is committed to protecting your personal information. All information collected through consultations, booking forms, and treatment records is stored securely, treated confidentially, and never shared without consent unless legally required. We comply with all applicable UK data protection regulations.</p>
        </section>

        {/* Section 11 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>11. Right to Refuse Service</h2>
          <p>Chi Botanical reserves the right to refuse or discontinue treatment where a client arrives excessively late, behaves aggressively, disrespectfully, or inappropriately, presents a health or safety risk, has contraindications that make treatment unsuitable, or fails to comply with studio policies. Where applicable, cancellation charges and outstanding balances will still apply.</p>
        </section>

        {/* Section 12 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>12. Additional Studio Information</h2>
          <p>To maintain a calm and relaxing environment:</p>
          <ul className={styles.list}>
            <li>Additional guests are not permitted unless agreed in advance.</li>
            <li>Children should not attend appointments unless receiving treatment.</li>
            <li>Mobile phones should be kept on silent during treatments.</li>
          </ul>
          <p>Outstanding balances may be paid via card, bank transfer, or cash where accepted.</p>
        </section>

        {/* Section 13 */}
        <section className={`${styles.policyBlock} reveal`}>
          <h2 className={styles.sectionTitle}>13. Client Agreement</h2>
          <p>By booking an appointment with Chi Botanical, you confirm that you have read and understood these policies and terms, agree to the cancellation, deposit, and payment policies, understand that deposits are non-refundable and non-transferable, authorise Chi Botanical to charge the card on file for any outstanding balances or policy-related fees, and accept responsibility for providing accurate health and consultation information.</p>
          <p className={styles.thankYou}>Thank you for respecting our policies and supporting Chi Botanical. These policies allow us to provide the highest standard of care, professionalism, and experience for every client.</p>
        </section>
      </div>
    </article>
  );
}