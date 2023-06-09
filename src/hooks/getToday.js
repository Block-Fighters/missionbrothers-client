export function getToday() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = String(today.getMonth() + 1).padStart(2, '0');
  const todayDate = String(today.getDate()).padStart(2, '0');

  return `${todayYear}-${todayMonth}-${todayDate}`;
}
