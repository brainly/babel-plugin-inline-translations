translator.trans('Something %replaced% then %else%', 'test');
translator.trans('Something %replaced% then %else%', false);
translator.trans('Something %replaced% then %else%', () => 42);
translator.trans(false, () => 42);
