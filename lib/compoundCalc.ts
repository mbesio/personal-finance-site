const futureValue = (
  initialDeposit,
  rate,
  years,
  compoundFrequency,
  monthlyContribution
) => {
  const compoundFrequencyMap = {
    Mensile: 12,
    Trimestrale: 4,
    Semestrale: 2,
    Annuale: 1,
  }

  const compoundFrequencyFactor = compoundFrequencyMap[compoundFrequency]

  const firstAddendum =
    initialDeposit *
    (1 + rate / 100 / compoundFrequencyFactor) **
      (years * compoundFrequencyFactor)

  const secondAddendum =
    (((monthlyContribution * 12) / compoundFrequencyFactor) *
      ((1 + rate / 100 / compoundFrequencyFactor) **
        (compoundFrequencyFactor * years) -
        1)) /
    (rate / 100 / compoundFrequencyFactor)
  return firstAddendum + secondAddendum
}

const principalInvested = (initialDeposit, years, monthlyContribution) =>
  initialDeposit + monthlyContribution * 12 * years

const interestEarned = (
  initialDeposit,
  rate,
  years,
  compoundFrequency,
  monthlyContribution
) =>
  futureValue(
    initialDeposit,
    rate,
    years,
    compoundFrequency,
    monthlyContribution
  ) - principalInvested(initialDeposit, years, monthlyContribution)

export const futureValueCalc = (
  initialDeposit,
  rate,
  years,
  compoundFrequency,
  monthlyContribution
) =>
  futureValue(
    initialDeposit,
    rate,
    years,
    compoundFrequency,
    monthlyContribution
  ).toFixed(2)

export const principalInvestedCalc = (
  initialDeposit,
  years,
  monthlyContribution
) => {
  return principalInvested(initialDeposit, years, monthlyContribution).toFixed(
    2
  )
}

export const interestEarnedCalc = (
  initialDeposit,
  rate,
  years,
  compoundFrequency,
  monthlyContribution
) =>
  interestEarned(
    initialDeposit,
    rate,
    years,
    compoundFrequency,
    monthlyContribution
  ).toFixed(2)
