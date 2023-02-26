export const monthlyInstallment = (amount, rate, years) => {
  const tassoPercentage = rate / 100

  const numerator = amount * tassoPercentage

  const powerBase = 1 + tassoPercentage / 12
  const powerExponent = -12 * years

  const denominator = 12 * (1 - Math.pow(powerBase, powerExponent))

  return (numerator / denominator).toFixed(2)
}

export const totalCost = (installment, years) =>
  (installment * 12 * years).toFixed(2)

export const totalInterest = (installment, years, amount) =>
  (installment * 12 * years - amount).toFixed(2)
