export default (functionName) => {
  throw new Error('Call to undefined state function "' + functionName + '".')
}