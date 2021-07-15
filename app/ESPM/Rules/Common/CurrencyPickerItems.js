
export default function CurrencyPickerItems(controlProxy) {
	let results = [];
	const currencyCodeArray = ['USD','EUR','SGD',"AUD",'INR',"SAR",'HKD','JPY','CNY'];
	const currecnyNameArray = [
	'United States Dollar',
	'European Euro',
	'Singapore Dollar',
	'Australian Dollar',
	'Indian Rupees',
	'Saudi Riyal',
	'Hong Kong Dollar',
	'Japanese Yen',
	'Chinese Yuan'
	];
	
	for (let i = 0; i < currencyCodeArray.length; i++){
		var obj = new Object();
		obj.DisplayValue = currecnyNameArray[i];
		obj.ReturnValue = currencyCodeArray[i];
		results.push(obj);
	}
	return results
}
