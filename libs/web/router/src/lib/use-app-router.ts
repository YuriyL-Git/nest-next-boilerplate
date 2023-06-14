
  "use client";
import { useRouter } from "next/navigation";

  import { HomePage, SignUpPage, LoginPage, PageExamplePage, LoginWithIdPage, HomeWithIdSlugPage, DashboardLoginPage, LoginWithIdSlugPage, LoginWithIdParams, HomeWithIdSlugParams, LoginWithIdSlugParams } from "./routes";
  
export const useAppRouter = () => {
  const router = useRouter();

  return {

   Home: {
      getRoute: () => {
        
        return `/`;
      },
      navigate: () => {
        router.push(HomePage.getRoute());
      }
      }
       
 , 
SignUp: {
      getRoute: () => {
        
        return `/sign-up`;
      },
      navigate: () => {
        router.push(SignUpPage.getRoute());
      }
      }
       
 , 
Login: {
      getRoute: () => {
        
        return `/login`;
      },
      navigate: () => {
        router.push(LoginPage.getRoute());
      }
      }
       
 , 
DashboardLogin: {
      getRoute: () => {
        
        return `/dashboard/login`;
      },
      navigate: () => {
        router.push(DashboardLoginPage.getRoute());
      }
      }
       
 , 
PageExample: {
      getRoute: () => {
        
        return `/page-example`;
      },
      navigate: () => {
        router.push(PageExamplePage.getRoute());
      }
      }
       
 , 
LoginWithId: {
      getRoute: ({id}: Omit<LoginWithIdParams, "lang">) => {
        
        return `/login/${id}`;
      },
      navigate: ({id}: Omit<LoginWithIdParams, "lang">) => {
        router.push(LoginWithIdPage.getRoute({id}));
      }
      }
       
 , 
HomeWithIdSlug: {
      getRoute: ({id, _slug}: Omit<HomeWithIdSlugParams, "lang">) => {
        const __slug = _slug.join('/');
        return `/${id}/${__slug}`;
      },
      navigate: ({id, _slug}: Omit<HomeWithIdSlugParams, "lang">) => {
        router.push(HomeWithIdSlugPage.getRoute({id, _slug}));
      }
      }
       
 , 
LoginWithIdSlug: {
      getRoute: ({id, _slug}: Omit<LoginWithIdSlugParams, "lang">) => {
        const __slug = _slug.join('/');
        return `/login/${id}/${__slug}`;
      },
      navigate: ({id, _slug}: Omit<LoginWithIdSlugParams, "lang">) => {
        router.push(LoginWithIdSlugPage.getRoute({id, _slug}));
      }
      }
       
 
   
  };
};
