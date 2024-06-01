import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { ExceptionEnum } from '@/enums/exceptionEnum';
import { t } from '@/hooks/web/useI18n';
import { RoleEnum } from '@/enums/roleEnum';

const ExceptionPage = () => import('@/views/sys/exception/Exception.vue');

const page: AppRouteModule = {
  path: '/page-demo',
  name: 'PageDemo',
  component: LAYOUT,
  redirect: '/page-demo/form/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:aperture-outline',
    title: t('日志管理'),
    roles: [RoleEnum.SUPER, RoleEnum.ADMIN],
  },
  children: [
    // =============================form start=============================
    {
      path: 'loginLog',
      name: 'loginLog',
      component: () => import('@/views/demo/log/loginLog.vue'),
      meta: {
        title: '登录日志',
      },
    },
    {
      path: 'OtherLog',
      name: 'loginLog',
      component: () => import('@/views/demo/log/OtherLog.vue'),
      meta: {
        title: '其他日志',
      },
    },
    // =============================list end=============================
  ],
};

export default page;
