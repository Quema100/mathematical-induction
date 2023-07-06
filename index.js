function sumFromOneToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function proofByInduction(n) {
  // 기본 단계: n = 1일 때, 합이 1인지 확인
  if (n === 1) {
    const sum = sumFromOneToN(n);
    console.log(`n = 1일 때, 1부터 1까지의 합은 ${sum}입니다.`);
    return;
  }

  // 이전 증명 결과 출력
  proofByInduction(n - 1);

  // 현재 증명 수행
  const sum = sumFromOneToN(n);
  console.log(`n = ${n}일 때, 1부터 ${n}까지의 합은 ${sum}입니다.`);

  // 이전 증명 결과와 현재 합 비교
  const prevSum = sumFromOneToN(n - 1);
  console.log(`n = ${n - 1}일 때, 1부터 ${n - 1}까지의 합은 ${prevSum}입니다.`);
  console.log(`n = ${n}일 때, 합이 ${prevSum} + ${n} = ${sum}입니다.`);

  if (sum === prevSum + n) {
    console.log(`수학적 귀납법에 의해 1부터 ${n}까지의 합이 올바르게 계산됩니다.`);
  } else {
    console.log(`수학적 귀납법에 의해 1부터 ${n}까지의 합이 올바르게 계산되지 않습니다.`);
  }
}

proofByInduction(10); // 1부터 10까지의 합 증명



