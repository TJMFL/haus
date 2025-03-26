import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const groq = createGroq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
});

interface RiskAssessmentInput {
  whoYouAre: string;
  whatYouNeed: string;
  briefSpecifics: string;
  briefDescription: string; // Replaces 'where'
  priority: string; // Now a comma-separated list
}

export async function generateRiskAssessment(input: RiskAssessmentInput) {
  const prompt = `
Generate a 600-700 word HAUS Luxury Elite Plan tailored exclusively for ${input.whoYouAre}, prioritizing ${input.priority}, with precise details on ${input.whatYouNeed} based on brief description: "${input.briefDescription}". Format as a sleek, high-tech operational brief:

**HAUS [${input.priority.split(', ')[0]}-adjective] [${input.whatYouNeed}] Plan**  
Designed for ${input.whoYouAre}. Optimized for ${input.priority}. Mission: Deliver ${input.whatYouNeed} with unmatched precision—${input.briefSpecifics ? `specifics: ${input.briefSpecifics}` : 'no additional specifics provided'}.

**HAUS EXECUTION**  
Operational breakdown for ${input.briefDescription}:  
1. **Pre-Event Readiness** – Custom strategy for ${input.briefDescription}.  
2. **Arrival & Staging** – Seamless, secure, luxurious entry protocol.  
3. **On-Ground Coordination** – Event-specific execution for ${input.whatYouNeed}.  
4. **Contingency Protocol** – Real-time adaptation to risks or enhancements.  
5. **Exit Strategy** – Smooth, secure departure and post-event wrap.  

🚘 **Mercedes-Benz GLC Coupes**: Exclusive fleet—chauffeured luxury transport (climate-controlled, privacy-enhanced) or armored security convoy (route-optimized).

**STRATEGIC EDGE**  
- HAUS Tech: Advanced tools tailored to ${input.priority}.  
- Live Intel: Simulated traffic, weather, local conditions (baseline: March 26, 2025).  
- Elite Advantage: Unrivaled precision for ${input.whoYouAre} in ${input.briefDescription}.

Use luxe, authoritative language. Keep it sleek, modern, high-tech—avoid clutter, excessive headings, or internal notes. Focus on a premium, actionable brief.
  `;

  try {
    const { text } = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      prompt,
      maxTokens: 2200,
    });
    console.log('HAUS AI response received:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('Groq Error:', error.message, error.stack);
    return `Error: HAUS AI failed to generate plan - ${error.message}`;
  }
}