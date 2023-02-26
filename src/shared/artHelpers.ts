const formatEventDate = (eventDate: Date): string => {
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return eventDate.toLocaleDateString('en-US', options);
} 

const createBTCLebel = (btcPrice: number) => `1BTC:$${btcPrice.toFixed(2)}`;

export {formatEventDate, createBTCLebel}