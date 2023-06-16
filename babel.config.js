module.exports = {
  // JS파일을 변환해 주는 작업은 plugin 단위로 이루어짐.
  // 바벨은 코드를 가져와서 결과물로 코드를 출력, 이 때 플러그인이 사용
  // 하나의 결과물을 위해 여러개의 플로그인을 활용해 여러번의 변환과정을 거침
  // 이러한 플러그인들의 집합을 preset이라고 칭함.
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }], // React 앱을 만들 때 필요한 플러그인들. React is not defined 해결해준다.
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true,
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
};
