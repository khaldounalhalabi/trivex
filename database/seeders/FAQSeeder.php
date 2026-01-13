<?php

namespace Database\Seeders;

use App\Models\FAQ;
use Illuminate\Database\Seeder;

class FAQSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FAQ::create([
            'question' => 'What services do you provide?',
            'answer'   => 'NO ANSWER',
        ]);

        FAQ::create([
            'question' => 'Do you provide cybersecurity?',
            'answer'   => 'We don’t offer cybersecurity services. Our expertise is private security and physical security technology—manned guarding, close protection, K9, CCTV, alarms, access control, and monitoring. We’ll collaborate with your internal IT/cyber teams or trusted vendors to align policies, harden interfaces, and avoid conflicts, but we don’t deliver cyber monitoring, SOC operations, incident response, or penetration testing. Partner referrals available on request.',
        ]);

        FAQ::create([
            'question' => 'Do you operate internationally?',
            'answer'   => 'Yes. We routinely integrate with existing access control and CCTV ecosystems, including badge/biometric readers, VMS/NVR platforms, alarm panels, and remote monitoring centers. Our engineers map device inventories, assess firmware/compatibility, and design API/onvif integrations, permissions, and escalation paths. /cyber teams or trusted vendors to align policies, harden interfaces, and avoid conflicts, but we don’t deliver cyber monitoring, SOC operations, incident response, or penetration testing. Partner referrals available on request.',
        ]);

        FAQ::create([
            'question' => 'How fast can you deploy?',
            'answer'   => 'NO ANSWER',
        ]);
    }
}
