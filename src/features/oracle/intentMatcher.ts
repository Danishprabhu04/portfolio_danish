export function matchIntent(input: string): string {
  const lower = input.toLowerCase().trim();

  if (/send.?message|send.?mail|contact.?me|write.?to|direct.?message|dm/i.test(lower)) return 'send_message';
  if (/experienc|work|job|career|employ|gms|karunya|miya/i.test(lower)) return 'experience';
  if (/skill|competenc|proficien|know|language|python|java|torch|tensor/i.test(lower)) return 'skills';
  if (/project|drugtrace|aegis|deploy|built|portfolio/i.test(lower)) return 'projects';
  if (/educat|degree|college|university|cgpa|school|b\.?tech/i.test(lower)) return 'education';
  if (/contact|email|phone|reach|call|locat|address|github|linkedin/i.test(lower)) return 'contact';
  if (/avail|hire|open|oppor|freelanc|remote|start/i.test(lower)) return 'availability';
  if (/tech|stack|tool|framework|infra/i.test(lower)) return 'tech_stack';
  if (/cert|certif|aws|credential/i.test(lower)) return 'certifications';
  if (/^(hi|hello|hey|sup|yo|howdy|greet)/i.test(lower)) return 'hello';

  return '';
}
