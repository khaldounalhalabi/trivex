<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Http\UploadedFile;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                'title'       => 'The Future of Maritime Security: Countering Hybrid Threats',
                'category'    => 'Tactical Ops',
                'read_time'   => '12 min read',
                'author_name' => 'Capt. David Sterling',
                'author_role' => 'Head of Maritime Operations',
                'is_featured' => true,
                'excerpt'     => 'As maritime piracy evolves into digital hijacking, Trivex implements integrated kinetic and electronic countermeasures to protect global supply chains.',
                'content'     => '
                    <p class="lead">In 2026, the definition of a "secure perimeter" at sea has expanded. No longer is a physical guard with a rifle sufficient to protect high-value cargo in volatile corridors.</p>

                    <h3>The Rise of Signal Spoofing</h3>
                    <p>Recent intelligence gathered by Trivex analysts suggests a 22% increase in navigation spoofing. Pirates are no longer just boarding ships; they are using signal interrupters to trick AIS (Automatic Identification Systems) into showing the vessel miles off its actual course. This "digital fog" allows attackers to maneuver ships into intercept zones without alerting regional coast guards.</p>

                    <h3>Kinetic Meets Electronic Defense</h3>
                    <p>Our response at Trivex is the deployment of the <strong>Integrated Response Tier (IRT)</strong>. This involves placing electronic warfare specialists alongside our tactical manned guarding teams. While our guards provide the physical deterrent, our tech specialists operate portable signal-sanitization units that ensure the ship\'s digital signature remains accurate and un-hackable.</p>

                    <h3>Geopolitical Chokepoints</h3>
                    <p>Focusing on the Gulf of Aden and the Strait of Hormuz, we have observed a shift toward state-sponsored interference. Our briefing suggests that private security must now operate with the sophistication of a sovereign navy. Trivex is currently the only firm utilizing autonomous subsurface drones to scan for hull-attached tracking devices while vessels are at anchor.</p>
                ',
                'image' => new UploadedFile(storage_path('app/private/required/posts/blog1.png'), 'blog1.png'),
            ],
            [
                'title'       => 'Executive Protection: The Psychology of the Invisible Shield',
                'category'    => 'Risk Advisory',
                'read_time'   => '10 min read',
                'author_name' => 'Sarah Vance',
                'author_role' => 'Principal Risk Consultant',
                'is_featured' => false,
                'excerpt'     => 'Protecting high-net-worth individuals in unstable regions requires a blend of low-profile intelligence and high-profile deterrents.',
                'content'     => '
                    <p>Effective Executive Protection (EP) is often misunderstood as a wall of muscular men in suits. In reality, the most successful EP missions are those where the security presence is virtually undetectable.</p>

                    <h3>Behavioral Intelligence & Advance Work</h3>
                    <p>At Trivex, 70% of our protection work is completed before the client ever touches the ground. Our Advance Teams conduct "Atmospheric Checks"—analyzing local political sentiment, route volatility, and even local medical facility response times. We don\'t just plan the route; we plan the alternate, the emergency, and the extraction routes based on real-time behavioral data.</p>

                    <h3>The Hybrid EP Model</h3>
                    <p>We utilize what we call the "Onion Strategy." The outer layer consists of digital surveillance (monitoring social media threats), the middle layer consists of local intelligence assets, and the inner layer is the physical Close Protection Officer (CPO). This multi-layered approach ensures that if a threat penetrates one layer, there are multiple failsafes in place to ensure the client\'s continuity of operations.</p>

                    <blockquote>"The goal of elite protection is not to survive an attack, but to ensure the attack is never attempted."</blockquote>
                ',
                'image' => new UploadedFile(storage_path('app/private/required/posts/blog2.png'), 'blog2.png'),
            ],
            [
                'title'       => 'Securing Critical Infrastructure: A Multi-Layered Defense',
                'category'    => 'Asset Protection',
                'read_time'   => '15 min read',
                'author_name' => 'Marcus Thorne',
                'author_role' => 'Strategic Infrastructure Lead',
                'is_featured' => false,
                'excerpt'     => 'From power grids to refineries, Trivex provides the physical and technical layer of defense necessary to prevent industrial sabotage.',
                'content'     => '
                    <p>The vulnerability of national power grids and energy refineries has become a primary concern for governments worldwide. These facilities are massive, often remote, and difficult to patrol with traditional methods alone.</p>

                    <h3>The Vulnerability of the Remote Perimeter</h3>
                    <p>Industrial sabotage usually begins with a perimeter breach at a remote, unmanned point. Trivex has pioneered the use of <strong>Autonomous Perimeter Patrols (APP)</strong>. These are solar-powered, AI-driven drones that stay aloft for 12 hours at a time, using thermal imaging to detect heat signatures that don\'t match local wildlife patterns.</p>

                    <h3>Human-Machine Integration</h3>
                    <p>While tech is vital, the "Human-in-the-Loop" remains our core philosophy. When an APP detects an anomaly, the data is instantly fed to our Manned Guarding Command Center. Our guards, equipped with ruggedized tactical tablets, receive the coordinates and live feed, allowing them to intercept the threat with full situational awareness before the perimeter is even crossed.</p>
                ',
                'image' => new UploadedFile(storage_path('app/private/required/posts/blog3.png'), 'blog3.png'),
            ],
            [
                'title'       => 'Manned Guarding 2.0: The Tech-Enhanced Operative',
                'category'    => 'Technology',
                'read_time'   => '9 min read',
                'author_name' => 'John Alexander',
                'author_role' => 'Technical Systems Architect',
                'is_featured' => false,
                'excerpt'     => 'Discover how Trivex is equipping physical guards with AR-enhanced HUDs and real-time biometric tracking.',
                'content'     => '
                    <p>The image of the "night watchman" is dead. At Trivex, we are redefining manned guarding as a high-tech profession. Our operatives are trained not just in defense, but in the management of complex security ecosystems.</p>

                    <h3>Augmented Reality HUDs</h3>
                    <p>During night patrols, Trivex guards utilize AR-integrated helmets. These systems overlay digital floorplans onto the operative\'s field of vision, highlighting fire exits, high-value assets, and the location of other team members in real-time. This reduces confusion in high-stress scenarios and ensures that tactical coordination is seamless.</p>

                    <h3>Biometric Monitoring</h3>
                    <p>We also monitor our own. Every guard on a Trivex contract wears a biometric sensor that tracks heart rate and stress levels. If a guard\'s vitals spike, the Command Center is alerted immediately. This allows us to provide instant backup or medical intervention, ensuring our team is always at peak performance to protect our clients.</p>
                ',
                'image' => new UploadedFile(storage_path('app/private/required/posts/blog4.png'), 'blog4.png'),
            ],
        ];

        foreach ($posts as $post) {
            Post::create([
                'title'       => $post['title'],
                'category'    => $post['category'],
                'read_time'   => $post['read_time'],
                'author_name' => $post['author_name'],
                'author_role' => $post['author_role'],
                'is_featured' => $post['is_featured'],
                'excerpt'     => $post['excerpt'],
                'content'     => $post['content'],
                'image'       => $post['image'],
            ]);
        }
    }
}
