// Write your solution in this file!
const employee = {
	name: 'Sam',
	streetAddress: '13 Street'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
	return Object.assign({}, obj, { [key]: value });
}

const employeeWithKeyAndValue = updateEmployeeWithKeyAndValue(employee, 'Sam', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
	obj[key] = value;
	return obj;
}
const newEmployeeWithKeyAndValue = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');


function deleteFromEmployeeByKey(obj, key) {
	const newObj = {...obj};
	delete newObj[key];
	return newObj;
}

const EmployeeWithoutName = deleteFromEmployeeByKey(employee, 'name');


function destructivelyDeleteFromEmployeeByKey(obj, key) {
	delete obj[key];
	return obj;

}

const newEmployeeWithName = destructivelyDeleteFromEmployeeByKey(employee, 'name');