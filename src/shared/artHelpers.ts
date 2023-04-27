const formatEventDate = (eventDate: Date | undefined): string => {
  if(!eventDate) return "";
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return eventDate.toLocaleDateString('en-US', options);
} 

const createBTCLebel = (btcPrice: number) => `1BTC:$${btcPrice.toFixed(2)}`;

const notNullOrUndefined = (value: any) => value !== null && value !== undefined;

export {formatEventDate, createBTCLebel, notNullOrUndefined}