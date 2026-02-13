import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

const included = [
  "Full access to all sessions (talks + hands-on)",
  "Workshop materials & resources",
  "Accommodation and food (details shared with shortlisted participants)",
  "Participation certificate",
];

const FeesSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Fees & What's Included</h2>

      <div className="border rounded-lg overflow-hidden mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Fee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Academic Participants</TableCell>
              <TableCell className="text-right font-semibold">₹2,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>People's Water Data Course Participants</TableCell>
              <TableCell className="text-right font-semibold">₹1,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Industry Participants</TableCell>
              <TableCell className="text-right font-semibold">₹4,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="font-semibold text-foreground mb-4">What's Included</h3>
      <div className="space-y-2 mb-6">
        {included.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check size={16} className="text-primary shrink-0" />
            {item}
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground italic mb-2">
        All fees are inclusive of applicable GST.
      </p>
      <p className="text-xs text-muted-foreground italic">
        Travel to Chennai / IIT Madras is typically borne by participants unless otherwise specified.
      </p>
    </div>
  </section>
);

export default FeesSection;
