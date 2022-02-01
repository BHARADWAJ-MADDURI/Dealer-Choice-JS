const data = [
    {id: 1, stateName: 'Alabama', postalCode: 'AL', capitalCity: 'Montgomery', timeZone: 'Central Standard Time (CST)'},
    {id: 2, stateName: 'Alaska', postalCode: 'AK', capitalCity: 'Juneau', timeZone: 'Alaska Standard Time (AKST)'},
    {id: 3, stateName: 'Arizona', postalCode: 'AZ', capitalCity: 'Phoenix', timeZone: 'Mountain Standard Time (MST)'},
    {id: 4, stateName: 'Arkansas', postalCode: 'AR', capitalCity: 'Little Rock', timeZone: 'Central Standard Time (CST)'},
    {id: 5, stateName: 'California', postalCode: 'CA', capitalCity: 'Sacramento', timeZone: 'Most of the state: Pacific Standard Time (PST)'},
    {id: 6, stateName: 'Colorado', postalCode: 'CO', capitalCity: 'Denver', timeZone: 'Mountain Standard Time (MST)'},
    {id: 7, stateName: 'Connecticut', postalCode: 'CT', capitalCity: 'Hartford', timeZone: 'Eastern Standard Time (EST)'},
    {id: 8, stateName: 'Delaware', postalCode: 'DE', capitalCity: 'Dover', timeZone: 'Eastern Standard Time (EST)'},
    {id: 9, stateName: 'Florida', postalCode: 'FL', capitalCity: 'Tallahassee', timeZone: 'Eastern Standard Time (EST)'},
    {id: 10, stateName: 'Georgia', postalCode: 'GA', capitalCity: 'Atlanta', timeZone: 'Eastern Standard Time (EST)'},
    {id: 11, stateName: 'Hawaii', postalCode: 'HI', capitalCity: 'Honolulu', timeZone: 'Hawaii-Aleutian Standard Time (HST)'},
    {id: 12, stateName: 'Idaho', postalCode: 'ID', capitalCity: 'Boise', timeZone: 'Mountain Standard Time (MST)'},
    {id: 13, stateName: 'Illinois', postalCode: 'IL', capitalCity: 'Springfield', timeZone: 'Central Standard Time (CST)'},
    {id: 14, stateName: 'Indiana', postalCode: 'IN', capitalCity: 'Indianapolis', timeZone: 'Eastern Standard Time (EST)'},
    {id: 15, stateName: 'Iowa', postalCode: 'IA', capitalCity: 'Des Moines', timeZone: 'Central Standard Time (CST)'},
    {id: 16, stateName: 'Kansas', postalCode: 'KS', capitalCity: 'Topeka', timeZone: 'Central Standard Time (CST)'},
    {id: 17, stateName: 'Kentucky', postalCode: 'KY', capitalCity: 'Frankfort', timeZone: 'Central Standard Time (CST)'},
    {id: 18, stateName: 'Louisiana', postalCode: 'LA', capitalCity: 'Baton Rouge', timeZone: 'Central Standard Time (CST)'},
    {id: 19, stateName: 'Maine', postalCode: 'ME', capitalCity: 'Augusta', timeZone: 'Eastern Standard Time (EST)'},
    {id: 20, stateName: 'Maryland', postalCode: 'MD', capitalCity: 'Annapolis', timeZone: 'Eastern Standard Time (EST)'},
    {id: 21, stateName: 'Massachusetts', postalCode: 'MA', capitalCity: 'Boston', timeZone: 'Eastern Standard Time (EST)'},
    {id: 22, stateName: 'Michigan', postalCode: 'MI', capitalCity: 'Lansing', timeZone: 'Eastern Standard Time (EST)'},
    {id: 23, stateName: 'Minnesota', postalCode: 'MN', capitalCity: 'St. Paul', timeZone: 'Central Standard Time (CST)'},
    {id: 24, stateName: 'Mississippi', postalCode: 'MS', capitalCity: 'Jackson', timeZone: 'Central Standard Time (CST)'},
    {id: 25, stateName: 'Missouri', postalCode: 'MO', capitalCity: 'Jefferson City', timeZone: 'Central Standard Time (CST)'},
    {id: 26, stateName: 'Montana', postalCode: 'MT', capitalCity: 'Helena', timeZone: 'Mountain Standard Time (MST)'},
    {id: 27, stateName: 'Nebraska', postalCode: 'NE', capitalCity: 'Lincoln', timeZone: 'Central Standard Time (CST)'},
    {id: 28, stateName: 'Nevada', postalCode: 'NV', capitalCity: 'Carson City', timeZone: 'Pacific Standard Time (PST)'},
    {id: 29, stateName: 'New Hampshire', postalCode: 'NH', capitalCity: 'Concord', timeZone: 'Eastern Standard Time (EST)'},
    {id: 30, stateName: 'New Jersey', postalCode: 'NJ', capitalCity: 'Trenton', timeZone: 'Eastern Standard Time (EST)'},
    {id: 31, stateName: 'New Mexico', postalCode: 'NM', capitalCity: 'Santa Fe', timeZone: 'Mountain Standard Time (MST)'},
    {id: 32, stateName: 'New York', postalCode: 'NY', capitalCity: 'Albany', timeZone: 'Eastern Standard Time (EST)'},
    {id: 33, stateName: 'North Carolina', postalCode: 'NC', capitalCity: 'Raleigh', timeZone: 'Eastern Standard Time (EST)'},
    {id: 34, stateName: 'North Dakota', postalCode: 'ND', capitalCity: 'Bismarck', timeZone: 'Central Standard Time (CST)'},
    {id: 35, stateName: 'Ohio', postalCode: 'OH', capitalCity: 'Columbus', timeZone: 'Eastern Standard Time (EST)'},
    {id: 36, stateName: 'Oklahoma', postalCode: 'OK', capitalCity: 'Oklahoma City', timeZone: 'Central Standard Time (CST)'},
    {id: 37, stateName: 'Oregon', postalCode: 'OR', capitalCity: 'Salem', timeZone: 'Most of the state: Pacific Standard Time (PST)'},
    {id: 38, stateName: 'Pennsylvania', postalCode: 'PA', capitalCity: 'Harrisburg', timeZone: 'Eastern Standard Time (EST)'},
    {id: 39, stateName: 'Rhode Island', postalCode: 'RI', capitalCity: 'Providence', timeZone: 'Eastern Standard Time (EST)'},
    {id: 40, stateName: 'South Carolina', postalCode: 'SC', capitalCity: 'Columbia', timeZone: 'Eastern Standard Time (EST)'},
    {id: 41, stateName: 'South Dakota', postalCode: 'SD', capitalCity: 'Pierre', timeZone: 'Central Standard Time (CST)'},
    {id: 42, stateName: 'Tennessee', postalCode: 'TN', capitalCity: 'Nashville', timeZone: 'Central Standard Time (CST)'},
    {id: 43, stateName: 'Texas', postalCode: 'TX', capitalCity: 'Austin', timeZone: 'Central Standard Time (CST)'},
    {id: 44, stateName: 'Utah', postalCode: 'UT', capitalCity: 'Salt Lake City', timeZone: 'Mountain Standard Time (MST)'},
    {id: 45, stateName: 'Vermont', postalCode: 'VT', capitalCity: 'Montpelier', timeZone: 'Eastern Standard Time (EST)'},
    {id: 46, stateName: 'Virginia', postalCode: 'VA', capitalCity: 'Richmond', timeZone: 'Eastern Standard Time (EST)'},
    {id: 47, stateName: 'Washington', postalCode: 'WA', capitalCity: 'Olympia', timeZone: 'Pacific Standard Time (PST)'},
    {id: 48, stateName: 'West Virginia', postalCode: 'WV', capitalCity: 'Charleston', timeZone: 'Eastern Standard Time (EST)'},
    {id: 49, stateName: 'Wisconsin', postalCode: 'WI', capitalCity: 'Madison', timeZone: 'Central Standard Time (CST)'},
    {id: 50, stateName: 'Wyoming', postalCode: 'WY', capitalCity: 'Cheyenne', timeZone: 'Mountain Standard Time (MST)'}
    
];

const list = () => {
    return [...data]
};

const find = (id) => {
    const state = data.find(state => state.id === +id);
    return {...state};
}

module.exports = { list: list, find: find };