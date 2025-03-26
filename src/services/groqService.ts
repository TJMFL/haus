import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const groq = createGroq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
});

interface RiskAssessmentInput {
  whoYouAre: string;
  whatYouNeed: string;
  briefSpecifics: string;
  when: string;
  where: string;
  priority: string;
}

export async function generateRiskAssessment(input: RiskAssessmentInput) {
  const prompt = `
Generate a **custom 400-500 word HAUS Plan** tailored **exclusively** for **${input.whoYouAre}**, prioritizing **${input.priority}**, with precise details on **${input.whatYouNeed}** in **${input.where}** on **${input.when}**.  

### **PLAN OVERVIEW**  
#### **Title:**  
“HAUS [${input.priority}-adjective] [${input.whatYouNeed}] Plan”  
(e.g., “HAUS Elite Private Security Plan for NYC Gala Night” or “HAUS Seamless Luxury Airport Transfer for VIPs in Monaco”).  

#### **Client Snapshot:**  
Designed **specifically** for **${input.whoYouAre}**, ensuring an optimized experience that prioritizes **${input.priority}**.  

#### **Mission Briefing:**  
A real-time **operational overview** based on:  
- **Date & Time:** ${input.when}  
- **Location-Specific Factors:** Key logistical or security considerations for **${input.where}**.  
- **Unique Client Needs:** Personalized strategies for **${input.whatYouNeed}**, including any additional specifics: **${input.briefSpecifics}**.  

### **HAUS EXECUTION (Tailored Action Plan)**  
A precise, **step-by-step operational breakdown** customized to **${input.whoYouAre}** and the unique demands of **${input.where}**.  
1. **Pre-Event Readiness** – (Customized preparation strategy based on ${input.when} and ${input.where}).  
2. **Arrival & Staging** – (How HAUS ensures a seamless, secure, or luxurious arrival experience).  
3. **On-Ground Coordination** – (Personalized execution steps based on specific event, transfer, or security requirements).  
4. **Adaptive Contingency Planning** – (Real-time risk mitigation or service enhancement plans for unforeseen factors).  
5. **Departure & Post-Event Support** – (Ensuring smooth transitions, safety, and efficiency post-engagement).  

🚘 **Mercedes-Benz GLC Coupes** are the exclusive fleet vehicle, strategically positioned for:  
- **Luxury Transport** – Chauffeured, climate-controlled, and privacy-enhanced experience.  
- **Security Convoy** – Armored detailing and route optimization for safety-focused clients.  

### **STRATEGIC EDGE**  
- **HAUS Tools & Resources** – High-end technology, logistical expertise, and security measures personalized to **${input.priority}**.  
- **Live Environmental Factors** – Contextual insights such as **simulated traffic, weather, and local conditions** (using March 26, 2025, as a baseline if date unspecified).  
- **Competitive Advantage** – What makes HAUS **superior** in this specific scenario for **${input.whoYouAre}** in **${input.where}**.  

### **CALL TO ACTION**  
“Claim Your Exclusive HAUS Plan for **${input.where}** Now – Enter Your Email for VIP Access.”  

### **TONE & STYLE**  
✅ **Hyper-personalized, real-time adaptation** to location, timing, and individual user needs.  
✅ **Luxe, high-authority language** that makes the user feel like an elite client.  
✅ **Custom-tailored execution strategy** that directly reflects their event, priorities, and situation.  
  `;

  try {
    const { text } = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      prompt,
      maxTokens: 4400, // Room for ~400-500 words
    });
    console.log('Groq response received:', text.substring(0, 100) + '...');
    return text;
  } catch (error) {
    console.error('Error generating report:', error);
    return 'Error generating HAUS plan';
  }
}