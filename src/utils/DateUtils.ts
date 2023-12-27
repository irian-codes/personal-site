/**
 * Calculates the age of a person in years.
 *
 * @param {string} dateOfBirthInISOFormat - The date of birth in ISO format.
 * @returns {number} The age in years.
 */
export function calculateAge(dateOfBirthInISOFormat: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirthInISOFormat);

  // Check if the birthDate is a valid date
  if (isNaN(birthDate.getMilliseconds())) {
    throw new Error('Invalid date of birth');
  }

  const tempDate = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  const age = today.getFullYear() - birthDate.getFullYear();

  if (today < tempDate) {
    return age - 1;
  } else {
    return age;
  }
}
