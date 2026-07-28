import Link from "next/link";
import BlogCta from "../_components/BlogCta";

export default function Content() {
  return (
    <>
      <p>
        These 20 questions are written in the same style and format as the
        real CLF-C02 exam — scenario-first, multiple choice, one correct
        answer per question — and split across all four domains in roughly
        the same proportion AWS uses. Cover the options with your hand,
        commit to an answer, then check the explanation. The explanation is
        the important part: knowing <em>why</em> the other three are wrong is
        what actually transfers to exam day.
      </p>

      <h2>Cloud Concepts</h2>

      <h3>1. CapEx vs. OpEx</h3>
      <p>
        A company currently buys and maintains its own physical servers. A
        consultant recommends moving to AWS to convert this spending pattern
        from capital expenditure to operational expenditure. What does this
        mean?
      </p>
      <ul>
        <li>A. The company will pay a large upfront cost for AWS hardware</li>
        <li>B. The company will pay only for what it consumes, as it consumes it</li>
        <li>C. The company will no longer need to pay for compute at all</li>
        <li>D. The company will lease AWS hardware for a fixed multi-year term</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> CapEx means paying large amounts upfront
        for infrastructure you own; OpEx means paying incrementally for what
        you actually use. AWS&apos;s pay-as-you-go model turns fixed
        infrastructure costs into a variable expense — that&apos;s the core
        economic argument for moving to the cloud, independent of any
        specific service.
      </p>

      <h3>2. Elasticity vs. scalability</h3>
      <p>
        An e-commerce site sees traffic spike 10x during a flash sale, then
        return to normal within hours. Which cloud characteristic describes
        the infrastructure automatically shrinking back down afterward?
      </p>
      <ul>
        <li>A. Scalability</li>
        <li>B. High availability</li>
        <li>C. Elasticity</li>
        <li>D. Fault tolerance</li>
      </ul>
      <p>
        <strong>Answer: C.</strong> Scalability is the ability to handle
        growth (usually in one direction — up). Elasticity specifically
        means resources expand <em>and</em> contract automatically to match
        real-time demand, which is exactly the &ldquo;spike then shrink
        back&rdquo; behavior described here.
      </p>

      <h3>3. Regions, Availability Zones, and edge locations</h3>
      <p>
        A company wants its application to survive the complete failure of
        one data center without any downtime. What should the architecture
        span, at minimum?
      </p>
      <ul>
        <li>A. A single Availability Zone with two EC2 instances</li>
        <li>B. Two or more Availability Zones within one Region</li>
        <li>C. A single edge location with caching enabled</li>
        <li>D. One Region only, with automated backups</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> Each Availability Zone is one or more
        physically separate data centers with independent power and
        networking. Spanning two or more AZs within a Region is the standard
        pattern for surviving a full data-center failure. A single AZ (A)
        shares the underlying facility risk; edge locations (C) are for
        content caching, not compute resilience.
      </p>

      <h3>4. The Well-Architected Framework</h3>
      <p>
        A team is reviewing their workload and asks, &ldquo;are we paying for
        more compute than we actually need?&rdquo; Which Well-Architected
        Framework pillar does this question belong to?
      </p>
      <ul>
        <li>A. Operational Excellence</li>
        <li>B. Reliability</li>
        <li>C. Cost Optimization</li>
        <li>D. Performance Efficiency</li>
      </ul>
      <p>
        <strong>Answer: C.</strong> Cost Optimization is specifically about
        avoiding unnecessary spend and right-sizing resources. Performance
        Efficiency (D) is about using resources efficiently for
        performance — a related but distinct question of &ldquo;is this the
        right tool,&rdquo; not &ldquo;are we overpaying.&rdquo;
      </p>

      <h3>5. Migration strategy</h3>
      <p>
        A company wants to move a legacy application to AWS as fast as
        possible, with the smallest number of code changes, before optimizing
        it later. Which migration strategy is this?
      </p>
      <ul>
        <li>A. Refactor</li>
        <li>B. Rehost (&ldquo;lift and shift&rdquo;)</li>
        <li>C. Repurchase</li>
        <li>D. Retire</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> Rehosting moves an application to AWS
        with minimal changes — often just moving VMs to EC2 — and is the
        fastest of the migration strategies. Refactoring (A) means
        re-architecting for cloud-native services, which takes longer but
        pays off more over time.
      </p>

      <BlogCta heading="Practice questions are only useful if you know why you got them wrong" />

      <h2>Security &amp; Compliance</h2>

      <h3>6. Shared Responsibility Model</h3>
      <p>
        A company runs an application on EC2. Under the Shared Responsibility
        Model, who is responsible for patching the guest operating system on
        that instance?
      </p>
      <ul>
        <li>A. AWS</li>
        <li>B. The customer</li>
        <li>C. Both AWS and the customer, split equally</li>
        <li>D. Whichever party set up the instance</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> For EC2, AWS secures the physical
        infrastructure, hypervisor, and networking — this is
        &ldquo;security <em>of</em> the cloud.&rdquo; The customer is
        responsible for the guest OS, patching, application software, and
        data — &ldquo;security <em>in</em> the cloud.&rdquo; This split
        changes depending on the service (it&apos;s different for a managed
        service like Lambda), which is exactly why this pattern gets tested
        so often.
      </p>

      <h3>7. Root account best practice</h3>
      <p>
        What is the recommended first action after creating a new AWS
        account?
      </p>
      <ul>
        <li>A. Use the root account for all daily administrative tasks</li>
        <li>B. Enable MFA on the root account and create an IAM user for daily work</li>
        <li>C. Delete the root account entirely</li>
        <li>D. Share the root credentials with the operations team</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> AWS best practice is to lock down the
        root account with MFA, avoid using it day-to-day, and do all regular
        work through an IAM user or role with least-privilege permissions.
        The root account can&apos;t be deleted (C), and sharing root
        credentials (D) violates basic security hygiene.
      </p>

      <h3>8. Service control policies</h3>
      <p>
        A company uses AWS Organizations and wants to prevent every account
        in a specific organizational unit from ever launching resources
        outside two approved Regions. What should they use?
      </p>
      <ul>
        <li>A. An IAM permissions boundary on each user</li>
        <li>B. A Service Control Policy (SCP) on the organizational unit</li>
        <li>C. A resource-based policy on each S3 bucket</li>
        <li>D. AWS Config rules</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> SCPs are applied at the AWS Organizations
        level and set the maximum available permissions for every account
        underneath them — including the root user of member accounts. This
        makes them the right tool for organization-wide guardrails like
        Region restrictions, not an individual IAM policy.
      </p>

      <h3>9. Encryption at rest</h3>
      <p>
        A company needs to encrypt data stored in S3 and wants AWS to manage
        the encryption keys automatically without any extra configuration.
        Which option satisfies this with the least setup?
      </p>
      <ul>
        <li>A. Client-side encryption before upload</li>
        <li>B. SSE-S3 (server-side encryption with Amazon S3-managed keys)</li>
        <li>C. A custom encryption Lambda triggered on upload</li>
        <li>D. No encryption, relying on IAM policies alone</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> SSE-S3 lets AWS manage the encryption
        keys entirely, requiring no extra setup — you just enable it. SSE-KMS
        would give you more control over key policies and audit trails, but
        the question asks for the least setup, which points to SSE-S3.
      </p>

      <h3>10. Compliance documentation</h3>
      <p>
        Where would a company go to download AWS compliance reports, such as
        SOC and PCI DSS reports, for an internal audit?
      </p>
      <ul>
        <li>A. AWS Trusted Advisor</li>
        <li>B. AWS Artifact</li>
        <li>C. AWS Config</li>
        <li>D. Amazon Inspector</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> AWS Artifact is the self-service portal
        for AWS compliance reports and select agreements. Trusted Advisor (A)
        checks account best practices, and Inspector (D) is a vulnerability
        scanning service — neither hosts audit documentation.
      </p>

      <h3>11. GuardDuty</h3>
      <p>
        A security team wants continuous, automated threat detection across
        their AWS accounts, using machine learning to flag unusual API
        activity, without deploying any agents. Which service fits?
      </p>
      <ul>
        <li>A. Amazon GuardDuty</li>
        <li>B. AWS Shield</li>
        <li>C. Amazon Macie</li>
        <li>D. AWS WAF</li>
      </ul>
      <p>
        <strong>Answer: A.</strong> GuardDuty is an agentless, managed threat
        detection service that analyzes account and network activity for
        malicious behavior. Macie (C) focuses specifically on discovering and
        protecting sensitive data in S3, and Shield/WAF (B, D) protect
        against DDoS and web exploits respectively — different problems.
      </p>

      <h2>Cloud Technology &amp; Services</h2>

      <h3>12. EC2 pricing model</h3>
      <p>
        A company runs a nightly batch job that can tolerate interruptions
        and restart later if needed. Which EC2 pricing model minimizes cost
        for this workload?
      </p>
      <ul>
        <li>A. On-Demand Instances</li>
        <li>B. Reserved Instances</li>
        <li>C. Spot Instances</li>
        <li>D. Dedicated Hosts</li>
      </ul>
      <p>
        <strong>Answer: C.</strong> Spot Instances offer the deepest
        discount — up to 90% off On-Demand — in exchange for AWS being able
        to reclaim the capacity with short notice. That trade-off is a
        perfect fit for an interruption-tolerant batch job, and a poor fit
        for anything that must stay running continuously.
      </p>

      <h3>13. S3 storage class</h3>
      <p>
        A media company needs to store archival footage accessed once or
        twice a year, and can tolerate a retrieval time of several hours.
        Which storage class minimizes storage cost?
      </p>
      <ul>
        <li>A. S3 Standard</li>
        <li>B. S3 Standard-IA</li>
        <li>C. S3 Glacier Flexible Retrieval</li>
        <li>D. S3 Intelligent-Tiering</li>
      </ul>
      <p>
        <strong>Answer: C.</strong> Glacier Flexible Retrieval is built for
        long-term archives that are rarely accessed and can tolerate
        retrieval delays measured in minutes to hours — and it&apos;s
        dramatically cheaper per GB than Standard or Standard-IA, which are
        meant for data you access far more often.
      </p>

      <h3>14. Relational vs. NoSQL</h3>
      <p>
        A gaming company needs a database for player session data with
        single-digit millisecond latency at massive scale, with a flexible,
        non-relational data structure. Which service fits best?
      </p>
      <ul>
        <li>A. Amazon RDS</li>
        <li>B. Amazon DynamoDB</li>
        <li>C. Amazon Redshift</li>
        <li>D. Amazon Aurora</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> DynamoDB is a fully managed NoSQL
        database built for exactly this profile — key-value/document data,
        single-digit millisecond performance, and massive horizontal scale.
        RDS and Aurora (A, D) are relational and better suited to structured,
        joinable data; Redshift (C) is a data warehouse for analytics, not
        low-latency transactional access.
      </p>

      <h3>15. Serverless compute</h3>
      <p>
        A company wants to run short code snippets in response to file
        uploads, without provisioning or managing any servers, paying only
        for the milliseconds of execution time. What should they use?
      </p>
      <ul>
        <li>A. Amazon EC2</li>
        <li>B. AWS Lambda</li>
        <li>C. Amazon Lightsail</li>
        <li>D. AWS Elastic Beanstalk</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> Lambda runs code in response to events
        (like an S3 upload) with zero server management and billing measured
        in execution time — the definition of serverless compute. EC2 and
        Lightsail (A, C) both involve managing a running server continuously.
      </p>

      <h3>16. Auto Scaling and Elastic Load Balancing</h3>
      <p>
        A web application needs to automatically add EC2 instances during
        peak traffic and distribute incoming requests evenly across them.
        Which two services together provide this?
      </p>
      <ul>
        <li>A. Amazon CloudFront and Route 53</li>
        <li>B. AWS Auto Scaling and Elastic Load Balancing</li>
        <li>C. Amazon S3 and Amazon CloudFront</li>
        <li>D. AWS Direct Connect and VPN</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> Auto Scaling adjusts the number of EC2
        instances based on demand, and Elastic Load Balancing distributes
        incoming traffic across them — the standard pairing for elastic,
        highly available web applications.
      </p>

      <h3>17. Public vs. private subnets</h3>
      <p>
        In a VPC, a database instance should never be reachable directly
        from the internet, while a web server in front of it should be.
        Where should the database instance be placed?
      </p>
      <ul>
        <li>A. In a public subnet with a security group blocking all traffic</li>
        <li>B. In a private subnet with no route to an internet gateway</li>
        <li>C. In the same subnet as the web server, using the same security group</li>
        <li>D. Outside the VPC entirely</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> A private subnet has no direct route to
        an internet gateway, which is what actually prevents inbound
        internet access — not just a security group rule on an otherwise
        internet-facing subnet. This public/private split is the standard
        two-tier VPC architecture.
      </p>

      <h3>18. Content delivery</h3>
      <p>
        A company with users worldwide wants to reduce latency when
        delivering static website assets like images and videos. Which
        service is purpose-built for this?
      </p>
      <ul>
        <li>A. Amazon CloudFront</li>
        <li>B. AWS Direct Connect</li>
        <li>C. Amazon VPC</li>
        <li>D. AWS Global Accelerator</li>
      </ul>
      <p>
        <strong>Answer: A.</strong> CloudFront is AWS&apos;s content delivery
        network — it caches content at edge locations close to users
        worldwide, directly reducing latency for static (and some dynamic)
        content. Global Accelerator (D) improves routing to application
        endpoints generally, but CDN caching is CloudFront&apos;s specific
        job.
      </p>

      <h2>Billing, Pricing &amp; Support</h2>

      <h3>19. Support plan tiers</h3>
      <p>
        A company needs 24/7 access to Cloud Support Engineers via phone,
        chat, and email, with a guaranteed response time for
        production-system-down issues. Which is the minimum support plan
        that provides this?
      </p>
      <ul>
        <li>A. Basic</li>
        <li>B. Developer</li>
        <li>C. Business</li>
        <li>D. Enterprise On-Ramp</li>
      </ul>
      <p>
        <strong>Answer: C.</strong> Business is the first tier with full 24/7
        access to Cloud Support Engineers across phone, chat, and email, plus
        a guaranteed one-hour response for production-system-down cases.
        Developer support (B) is business-hours email only for general
        guidance, and Basic (A) is account/billing support only.
      </p>

      <h3>20. Cost visibility tools</h3>
      <p>
        A finance team wants to visualize and forecast AWS spending trends
        over time and break costs down by service and tag. Which tool is
        built for this?
      </p>
      <ul>
        <li>A. AWS Trusted Advisor</li>
        <li>B. AWS Cost Explorer</li>
        <li>C. AWS Budgets</li>
        <li>D. AWS Config</li>
      </ul>
      <p>
        <strong>Answer: B.</strong> Cost Explorer is specifically built to
        visualize, analyze, and forecast spend over time with filtering by
        service, tag, and more. AWS Budgets (C) sets spending thresholds and
        alerts once you cross them — useful, but it doesn&apos;t provide the
        same historical visualization and forecasting.
      </p>

      <h2>How you scored</h2>
      <p>
        If you got 16 or more of these right on your first pass without
        peeking, you&apos;re close to exam-ready — spend your remaining time
        on timed full-length mocks. If you missed several in Security &amp;
        Compliance or Cloud Technology &amp; Services, that&apos;s useful
        signal: those two domains carry 64% of the real exam, so that&apos;s
        where your next study block should go. Our{" "}
        <Link href="/blog/aws-cloud-practitioner-clf-c02-study-guide-2026">
          study guide
        </Link>{" "}
        breaks that prioritization down week by week.
      </p>
    </>
  );
}
