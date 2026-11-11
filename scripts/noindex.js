// 미리보기/시험 빌드(HEXO_NOINDEX=true)에는 검색엔진 차단 메타 태그를 넣는다.
if (process.env.HEXO_NOINDEX === 'true') {
  hexo.extend.injector.register(
    'head_end',
    '<meta name="robots" content="noindex, nofollow">'
  );
}
