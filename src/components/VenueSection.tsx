import { MapPin, Train, BadgeCheck } from "lucide-react";

const VenueSection = () => (
  <section id="venue" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Venue & Logistics</h2>

      <p className="text-muted-foreground leading-relaxed mb-8 text-center">
        The workshop will be conducted on-site at <strong className="text-foreground">ICSR, IIT Madras, Chennai</strong>, enabling an immersive learning environment with direct access to experts, peer networking, and live practical sessions.
      </p>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-muted/50 rounded-lg p-5">
          <Train size={22} className="text-primary mb-2" />
          <h3 className="font-semibold text-foreground text-sm mb-1">How to Reach</h3>
          <p className="text-xs text-muted-foreground">
            Chennai Airport (MAA) is ~15 km away. IIT Madras is accessible by metro (IIT Madras station) and local transport.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-5">
          <BadgeCheck size={22} className="text-primary mb-2" />
          <h3 className="font-semibold text-foreground text-sm mb-1">Campus Entry</h3>
          <p className="text-xs text-muted-foreground">
            Photo ID is required for campus entry. Details will be shared with selected participants.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-5">
          <MapPin size={22} className="text-primary mb-2" />
          <h3 className="font-semibold text-foreground text-sm mb-1">Accommodation</h3>
          <p className="text-xs text-muted-foreground">
            Accommodation and food will be arranged for selected participants. Check-in and details shared via email.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default VenueSection;
