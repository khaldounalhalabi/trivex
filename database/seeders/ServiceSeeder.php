<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\ServiceFeature;
use App\Models\ServiceOverview;
use Illuminate\Database\Seeder;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->createService([
            'service' => [
                'name'              => 'Manned Security Services',
                'small_description' => 'Trained professionals providing static guarding, mobile patrols, reception security, construction site protection, and event management for enhanced safety.',
                'description'       => 'Our Manned Security Services ensure a visible, reliable, and professional security presence at your premises. Trivex officers are trained to maintain order, prevent incidents, and ensure safety through vigilance, discipline, and communication. Each officer operates under clear post orders, supported by supervisors and reporting systems to guarantee accountability and performance excellence.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/manned-security/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/manned-security/image.png'), 'cover.png'),
                'is_featured'       => true,
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/manned-security/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/manned-security/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/manned-security/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Static Guarding',
                    'description' => 'Our static guards deliver continuous protection by monitoring access points, enforcing entry protocols, and safeguarding assets. Whether deployed at a corporate office, residential estate, retail outlet, or industrial facility, they provide a professional presence that deters unauthorized activity while maintaining a welcoming and safe environment.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/manned-security/features/static-guarding.png'), 'static-guarding.png'),
                ],
                [
                    'title'       => 'Mobile Patrol Units',
                    'description' => 'Mobile patrols are ideal for large or multiple locations requiring flexible coverage. Our marked patrol vehicles and trained officers conduct randomized route patrols, alarm responses, and after-hours checks, providing real-time visibility and rapid response to incidents—minimizing risks like theft and vandalism.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/manned-security/features/mobile-patrols.png'), 'mobile-patrols.png'),
                ],
                [
                    'title'       => 'Reception & Concierge Security',
                    'description' => 'Combining hospitality with security, our reception and concierge officers manage visitor access, verify identification, and maintain professional front-of-house service. They ensure guests are welcomed efficiently while maintaining vigilance to prevent unauthorized entry, ensuring a seamless balance between security and service.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/manned-security/features/reception.png'), 'reception.png'),
                ],
                [
                    'title'       => 'Construction Site Security',
                    'description' => 'Construction sites face high risks of theft, vandalism, and trespassing. Our trained guards secure perimeters, monitor equipment, and control access for contractors and suppliers. With 24/7 monitoring and mobile patrols, we protect materials and machinery, ensuring safe and compliant site operations.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/manned-security/features/construction.png'), 'construction.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Specialist Protection',
                'small_description' => 'Expert close protection, convoy security, high-risk zone coverage, and international protection services, ensuring the safety of VIPs and assets.',
                'description'       => 'Trivex Security International’s Specialist Protection services are designed for individuals and organizations requiring discreet, high-level protection in any environment. Our elite teams are trained in surveillance awareness, route planning, and emergency response—ensuring safety without disrupting daily activities.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/specialist-protection/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/specialist-protection/image.png'), 'cover.png'),
                'is_featured'       => true,
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/specialist-protection/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/specialist-protection/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/specialist-protection/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Close Protection',
                    'description' => 'Professional bodyguards safeguard VIPs, executives, diplomats, and celebrities with discretion and precision. Services include threat assessment, personal escorting, and crowd control, ensuring constant protection both on-site and during travel.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/specialist-protection/features/close.png'), 'close.png'),
                ],
                [
                    'title'       => 'Escort & Convoy Security',
                    'description' => 'Armoured vehicle escorts and convoy operations ensure safe transport through high-risk routes. Our teams plan and execute secure movements with real-time communication, advance route scanning, and emergency response readiness.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/specialist-protection/features/escort.png'), 'escort.png'),
                ],
                [
                    'title'       => 'High-Risk Zone Protection',
                    'description' => 'Operating in conflict-prone or unstable regions requires specialized preparation. Trivex deploys experienced teams with field-tested protocols to protect clients and missions in war zones, humanitarian areas, and critical operations.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/specialist-protection/features/high-risk.png'), 'high-risk.png'),
                ],
                [
                    'title'       => 'International Protection Services',
                    'description' => 'For clients operating globally, we provide cross-border protection and international assignments. Our global network enables seamless coordination with local agencies, ensuring safety wherever business or diplomatic duties take you.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/specialist-protection/features/international.png'), 'international.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Aviation and Transport Security',
                'small_description' => 'Comprehensive security for airports, ports, cargo, and public transport, ensuring safe travel, cargo protection, and regulatory compliance across all modes.',
                'description'       => 'Trivex delivers comprehensive Aviation and Transport Security solutions for airports, airlines, ports, and logistics networks. We integrate trained personnel, advanced systems, and regulatory compliance to maintain safety across all transit points.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/aviation/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/aviation/image.png'), 'cover.png'),
                'is_featured'       => true,
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/aviation/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/aviation/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/aviation/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Airport Security ',
                    'description' => 'We provide passenger screening, baggage checks, and access control to maintain airport safety and compliance. Our teams coordinate with aviation authorities to ensure smooth, secure operations at all terminals.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/aviation/features/airport.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Port & Maritime Security',
                    'description' => 'Our maritime security officers perform cargo inspections, vessel protection, and dockside patrols, following ISPS Code requirements. We safeguard ports against theft, smuggling, and unauthorized access.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/aviation/features/port.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Airline & Cargo Security',
                    'description' => 'We secure freight handling, airside logistics, and courier consignments through monitored loading and sealed transport, ensuring the integrity of shipments from source to destination.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/aviation/features/airline.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Rail & Public Transport Security',
                    'description' => 'Trivex officers patrol rail stations, platforms, and vehicles to maintain commuter safety, manage crowds, and prevent vandalism or suspicious activities.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/aviation/features/rail.png'), Str::uuid(), '.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Government and Defence Contracts',
                'small_description' => 'Specialized security for government buildings, military bases, embassies, critical infrastructure, and border security, ensuring safety and operational continuity.',
                'description'       => 'At Trivex Security International, we provide specialized security solutions for government buildings, military installations, embassies, and critical national infrastructure. Our experienced security teams are well-versed in operating within high-risk, high-stakes environments, ensuring the protection of both personnel and sensitive assets. From government office buildings to military bases, we deliver tailored security that meets the highest standards of compliance and confidentiality. We offer full-spectrum protection, including perimeter security, access control, surveillance, and emergency response coordination, all managed by seasoned professionals with in-depth knowledge of government regulations and defence protocols. Our commitment to precision and reliability ensures that we can support the security needs of local, national, and international governments, providing a solid foundation for any defense or government operation.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/government/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/government/image.png'), 'cover.png'),
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/government/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/government/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/government/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Government Building',
                    'description' => 'We protect government offices and civic institutions through access management, surveillance monitoring, and controlled entry systems, ensuring staff and visitor safety.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/government/features/building.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Military Base Protection',
                    'description' => 'Our teams support non-combat security roles at defense installations, handling perimeter defense, logistics control, and checkpoint management with military-grade discipline.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/government/features/military.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Embassy & Diplomatic Premises ',
                    'description' => 'Embassy operations require discretion and diplomacy. We deploy vetted officers skilled in protocol, access control, and incident prevention, ensuring secure diplomatic environments.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/government/features/embassy.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Critical National Infrastructure ',
                    'description' => 'From power plants to oil and gas sites, our specialists protect key national assets through 24/7 monitoring, threat assessments, and controlled access measures.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/government/features/critical.png'), Str::uuid(), '.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Cash and Valuables in Transit',
                'small_description' => 'Secure transport of cash, high-value assets, and sensitive items using armoured vehicles, ensuring safety, confidentiality, and timely delivery.',
                'description'       => 'Trivex Security International provides top-tier security for the transportation of cash and high-value assets, ensuring their safe and secure transit. We specialize in Cash-in-Transit (CIT) services using state-of-the-art armoured vehicles and highly trained personnel to protect financial institutions, retailers, and businesses from theft, vandalism, and hijacking. Our fleet of armoured vehicles is equipped with the latest security technology, including GPS tracking, remote communication systems, and internal surveillance cameras, ensuring real-time monitoring and rapid response capabilities throughout the entire journey. From routine cash deliveries to high-value asset transport, our CIT services are designed to mitigate risks and ensure the integrity of your assets during transit.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/cash/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/cash/image.png'), 'cover.png'),
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/cash/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/cash/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/cash/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Cash-in-Transit (CIT) Armoured Vehicles',
                    'description' => 'Secure transportation with GPS-tracked, armoured vehicles and trained personnel ensures cash and valuables arrive safely at their destination.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/cash/features/transit.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Secure ATM Replenishment',
                    'description' => 'We handle ATM refills under strict dual-control procedures, minimizing risk during collection, transport, and deposit of funds.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/cash/features/atm.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'High-Value Asset Transport',
                    'description' => 'Our teams transport jewelry, artwork, and sensitive documents through secure routing, real-time tracking, and full chain-of-custody documentation.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/cash/features/asset.png'), Str::uuid(), '.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Canine (K9) Units',
                'small_description' => 'Highly trained K9 teams specializing in elite detection, deterrence, and high-risk patrol to ensure maximum site security.',
                'description'       => 'Trivex Security International provides highly trained K9 units for a wide range of security operations, offering unparalleled detection and deterrence capabilities. Our K9 teams are trained to handle multiple tasks, from guarding and patrol duties to explosives detection and narcotics detection. Guard dogs are deployed in high-risk environments, including construction sites, retail establishments, and event venues, to deter criminal activity and ensure the safety of both personnel and property. These specially trained dogs are not only effective at preventing threats but also help to boost the overall presence of security, providing a psychological deterrent to potential wrongdoers. Our K9 units are deployed strategically to maintain high levels of vigilance, with handlers working closely with local law enforcement and on-site security teams to ensure constant protection.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/k9/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/k9/image.png'), 'cover.png'),
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/k9/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/k9/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/k9/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Guard Dogs for Patrols',
                    'description' => 'Visible deterrence through routine patrols, protecting large or high-risk areas like warehouses, compounds, and open perimeters.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/k9/features/guard.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Explosives Detection Dogs',
                    'description' => 'Expert teams use specialized dogs to detect explosive materials, ensuring safety at events, airports, and critical facilities.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/k9/features/explosives.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Narcotics Detection Dogs',
                    'description' => 'Our narcotics dogs assist in preventing drug smuggling and unauthorized possession in high-security environments.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/k9/features/narcotics.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Search & Rescue Dogs',
                    'description' => 'Trained to locate missing persons in disaster or emergency situations, these dogs enhance rescue response times and outcomes.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/k9/features/search.png'), Str::uuid(), '.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Security Technology & Systems',
                'small_description' => 'Cutting-edge surveillance and access control solutions, featuring high-definition CCTV and biometric systems for unified site security',
                'description'       => 'Trivex Security International offers cutting-edge security technology solutions that complement our physical security services, enhancing protection and streamlining operations. Our CCTV systems provide comprehensive surveillance with real-time monitoring, allowing us to track activity across multiple locations. We install high-definition cameras equipped with night vision, motion detection, and automatic alerts to ensure continuous surveillance, regardless of the time of day. In addition to monitoring, we offer access control systems, such as biometric, card, and fob-based entry systems, designed to restrict unauthorized access and track personnel movement in sensitive areas. These systems are integrated into a unified platform, giving security teams full visibility and control over access points across multiple sites, ensuring compliance with safety and operational standards.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/tech/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/tech/image.png'), 'cover.png'),
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/tech/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/tech/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/tech/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'CCTV Installation & 24/7 Remote Monitoring',
                    'description' => 'High-definition CCTV coverage with real-time monitoring and recording ensures total situational awareness and rapid response.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/tech/features/cctv.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Alarm Systems (Fire & Intruder, Panic Buttons)',
                    'description' => 'We install reliable alarm systems that alert on intrusion, fire, or emergency situations, enabling immediate response.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/tech/features/alarm.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Access Control Systems',
                    'description' => 'From biometric to proximity-card systems, we provide secure entry control that limits access to authorized personnel only.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/tech/features/access.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Drone Surveillance & Aerial Security',
                    'description' => 'Our drones cover large perimeters, construction sites, and outdoor events—providing live aerial visibility and rapid threat identification.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/tech/features/drone.png'), Str::uuid(), '.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Risk Management & Advisory',
                'small_description' => 'Comprehensive security risk assessments and proactive mitigation strategies designed to safeguard your operations and infrastructure.',
                'description'       => "Trivex Security International’s Risk Management and Advisory services provide comprehensive solutions designed to identify, assess, and mitigate potential security risks, ensuring the continuity of your operations. Our team of experienced security consultants works closely with clients to develop tailored risk management strategies that address specific threats and vulnerabilities across various industries. We begin by conducting thorough security risk assessments and threat analysis, which include site surveys, interviews, and the use of advanced methodologies to evaluate both internal and external risks. These assessments help us identify weaknesses in your existing security infrastructure, allowing us to recommend actionable solutions that enhance protection and mitigate potential threats. Whether it's an industrial site, government building, or event venue, our approach ensures that no stone is left unturned, and that risks are identified and addressed proactively.",
                'cover'             => new UploadedFile(storage_path('app/private/required/services/risk/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/risk/image.png'), 'cover.png'),
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/risk/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/risk/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/risk/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Security Risk Assessments & Threat Analysis',
                    'description' => 'We conduct site evaluations and vulnerability assessments to detect weaknesses and recommend actionable improvements.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/risk/features/security.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Crisis Management & Emergency Evacuation Planning',
                    'description' => 'Tailored response plans ensure efficient evacuation, communication, and continuity during critical incidents.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/risk/features/crisis.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Disaster Recovery Planning',
                    'description' => 'We help organizations build recovery protocols that minimize downtime and safeguard assets after disruptions.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/risk/features/disaster.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Counter-Terrorism Consulting',
                    'description' => 'Expert advice on proactive counter-measures, awareness programs, and physical security fortification for high-risk environments.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/risk/features/counter.png'), Str::uuid(), '.png'),
                ],
            ],
        ]);

        $this->createService([
            'service' => [
                'name'              => 'Training & Consultancy',
                'small_description' => 'Professional security training and consultancy services to empower your team with conflict management, first aid, and emergency response skills.',
                'description'       => 'At Trivex Security International, we understand that the strength of any security operation relies not just on the technology and systems in place, but also on the expertise of the people involved. Our Training and Consultancy services are designed to build the skills and knowledge necessary for handling diverse security challenges across various environments. We provide security officer training that covers essential topics such as licensing, conflict management, first aid, and emergency response, ensuring that your staff is well-prepared to handle any situation with professionalism and confidence. Our training programs are tailored to meet industry standards and can be customized to address the specific needs of your business. By empowering your team with the right skills and knowledge, we enhance the overall security posture of your organization and create a safer working environment.',
                'cover'             => new UploadedFile(storage_path('app/private/required/services/training/cover.png'), 'cover.png'),
                'image'             => new UploadedFile(storage_path('app/private/required/services/training/image.png'), 'cover.png'),
            ],
            'overview' => [
                'description' => 'At Trivex Security International, we offer a comprehensive range of elite security solutions tailored to meet the unique needs of businesses, governments, and high-profile clients. Our services include manned security, specialist protection, aviation and transport security, government and defence contracts, cash and valuables in transit, canine units, advanced security technology, risk management, and expert training. We are committed to providing safety, reliability, and peace of mind.',
                'images'      => [
                    new UploadedFile(storage_path('app/private/required/services/training/overview/1.png'), 'overview-1.png'),
                    new UploadedFile(storage_path('app/private/required/services/training/overview/2.png'), 'overview-2.png'),
                    new UploadedFile(storage_path('app/private/required/services/training/overview/3.png'), 'overview-3.png'),
                ],
            ],
            'features' => [
                [
                    'title'       => 'Security Officer Training',
                    'description' => 'We equip officers with essential skills in law compliance, emergency response, and interpersonal communication for effective duty performance.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/training/features/officer.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Fire Safety & Emergency Drills',
                    'description' => 'Interactive drills and fire safety training ensure readiness and compliance with local safety regulations.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/training/features/fire.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Defensive Driving & Convoy Operations',
                    'description' => 'We train drivers for high-risk routes, convoy coordination, and evasive maneuvers to ensure safety in transit operations.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/training/features/defensive.png'), Str::uuid(), '.png'),
                ],
                [
                    'title'       => 'Counter-Surveillance Training',
                    'description' => 'Specialized training helps executives and field staff recognize and neutralize surveillance threats proactively.',
                    'image'       => new UploadedFile(storage_path('app/private/required/services/training/features/counter.png'), Str::uuid(), '.png'),
                ],
            ],
        ]);
    }

    /**
     * @param array{service: array{name:string, small_description:string,description:string,cover:UploadedFile,
     *                                            image:UploadedFile,is_featured?:bool},
     *                                            overview:array{description:string, images:UploadedFile[]},
     *                                            features:array{array{title:string, description:string,
     *                                            image:UploadedFile}}} $data
     * @return void
     */
    private function createService(array $data = []): void
    {
        $service = Service::create($data['service']);
        ServiceOverview::create([...$data['overview'], 'service_id' => $service->id]);
        foreach ($data['features'] as $feature) {
            ServiceFeature::create([
                ...$feature,
                'service_id' => $service->id,
            ]);
        }
    }
}
