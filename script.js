// Arrays of manifestation messages
const healthMessages = [
    "I am healthy, strong, and full of energy.",
    "My body is healing and thriving.",
    "Every day, in every way, I am getting better and better.",
    "My immune system is powerful and protects me.",
    "I nourish my body with healthy choices.",
    "Every cell in my body radiates health and vitality.",
    "I release stress and embrace peace for my well-being.",
    "My mind and body are in perfect harmony.",
    "I am grateful for my body and treat it with kindness.",
    "Health and wellness flow effortlessly to me."
  ];
  
  const beautyMessages = [
    "I am beautiful inside and out.",
    "I radiate confidence and beauty.",
    "I embrace my unique beauty and love myself.",
    "My inner light shines brightly, making me attractive.",
    "I am comfortable in my own skin and love every part of me.",
    "My beauty grows with self-love and self-care.",
    "I attract compliments and admiration effortlessly.",
    "My body is a temple, and I cherish it.",
    "I glow with health, happiness, and love.",
    "Beauty radiates from my soul, making me irresistibly attractive."
  ];
  
  const wealthMessages = [
    "I am a magnet for abundance.",
    "Money flows to me easily and effortlessly.",
    "I am worthy of financial success.",
    "Prosperity is drawn to me in expected and unexpected ways.",
    "My income is constantly increasing.",
    "Financial opportunities present themselves to me every day.",
    "I am aligned with the energy of wealth and success.",
    "I attract wealth and abundance with ease.",
    "I am open to receiving limitless prosperity.",
    "My financial dreams are coming true."
  ];
  
  const loveMessages = [
    "I am worthy of deep, unconditional love.",
    "Love flows to me effortlessly and abundantly.",
    "My heart is open to giving and receiving love.",
    "I attract healthy, fulfilling relationships into my life.",
    "I am surrounded by love in every area of my life.",
    "The universe is guiding me toward my soulmate.",
    "I radiate love, and it comes back to me multiplied.",
    "I am deserving of a passionate and committed relationship.",
    "I trust that true love is already on its way to me.",
    "Every day, my love life becomes more joyful and fulfilling."
  ];
  
  const successMessages = [
    "I am destined for greatness and success.",
    "My dreams are turning into reality with every action I take.",
    "Success is my natural state of being.",
    "I am confident in my abilities to achieve my goals.",
    "Every challenge I face is an opportunity for growth.",
    "I attract opportunities that lead me to success.",
    "I am worthy of all the success and happiness life has to offer.",
    "My hard work and determination bring me endless achievements.",
    "I am constantly improving and evolving into the best version of myself.",
    "Success and prosperity flow effortlessly to me."
  ];

  // Function to generate a random message
function getRandomMessage(category) {
  switch (category) {
    case "health":
      return healthMessages[Math.floor(Math.random() * healthMessages.length)];
    case "beauty":
      return beautyMessages[Math.floor(Math.random() * beautyMessages.length)];
    case "wealth":
      return wealthMessages[Math.floor(Math.random() * wealthMessages.length)];
    case "love":
      return loveMessages[Math.floor(Math.random() * loveMessages.length)];
    case "success":
      return successMessages[Math.floor(Math.random() * successMessages.length)];
    default:
      return "Invalid category. Please choose: health, beauty, wealth, love, or success.";
  }
}

// Example usage
console.log(getRandomMessage("wealth")); // Outputs a random wealth message
console.log(getRandomMessage("success"));   // Outputs a random love message
  
  