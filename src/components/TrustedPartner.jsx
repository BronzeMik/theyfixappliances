import TwoColumnSection from "./TwoColumnSection";
import trustedPartner from '../assets/trusted-partner-img.png'

export default function TrustedPartner() {
    return(
        <TwoColumnSection
        title='Your Trusted Partner in Appliance Repair'
        description='At They Fix Appliances, we are dedicated to providing exceptional appliance repair services for both residential and commercial clients. With years of experience and a team of certified technicians, we have built a reputation for reliability, efficiency, and outstanding customer service. Our mission is to deliver high-quality, timely, and affordable repair solutions that ensure the smooth operation of your appliances. We understand the inconvenience a broken appliance can cause, and we strive to minimize downtime and restore functionality as quickly as possible.'
        img={trustedPartner}
        reversed={false}
        />
    )
}