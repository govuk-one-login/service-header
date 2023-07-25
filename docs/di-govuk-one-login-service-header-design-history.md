# Design history of the GOV.UK One Login service header

When your users create a GOV.UK One Login, they get access to a space where they can see and access all the services they've used with it and manage their sign in details. The aim of the GOV.UK One Login service header is to provide an easy way to this space from services, a way to sign out and to help users understand which space they’re in. This document collates all versions of the header that have been tested with users.

## Dates the GOV.UK One Login service header has been tested:
1. 27, 28 February 2023
2. 17, 18 January 2023
3. 25, 26 October 2022 (round 2)
4. 11, 12 October (round 1)
5. 25, 26 May 2022 (round 2)
6. 10, 11 May 2022 (round 1)

## How we tested the header

We usability tested various iterations of the header. In testing, we asked participants to create a GOV.UK One Login to use a service, followed by a separate task of signing into a different service with their GOV.UK One Login. In these tasks we asked participants where they thought the links in the header would take them and where they would go to manage their GOV.UK One Login. This meant we could gauge participants' understanding of GOV.UK One Login’s relationship with the services on GOV.UK and which navigation designs were most successful in conveying this.

## Key things we are designing for

- helping users understand that the service account sits under an overarching multi-service login
- showing users they are signed in
- trying to impact service team's navigation patterns as little as possible
- allowing users to sign out easily
- making sure users have a route to their GOV.UK One Login (to manage credentials, etc.) that doesn't get in the way of the task they're trying to complete
- how do we match user expectation about what happens when they interact with different elements of the navigation design
- showing users that the service uses GOV.UK One Login

## Things we are still working out

- what happens if a service has more than one level of navigation or types of navigation components
- other forms of navigation for complex services, we know the header is not ‘one size fits all’


## Versions of the GOV.UK One Login service header we have tested

### 14, 15 March 2023  -  (most recent version)
Desktop:
![The black GOV.UK header with two links 'Your GOV.UK One Login' and 'Sign out'. Underneath this in a grey header are the service navigation links.](/docs/assets/design-history/7-header-desktop.png)

Mobile: </br>
![The black GOV.UK header with two links 'Your GOV.UK One Login' and 'Sign out'. Underneath this in a grey header are the service navigation links.](/docs/assets/design-history/7-header-mobile.png)

Context:
![Image of the desktop version of the service header from 14, 15 March testing ](/docs/assets/design-history/7-context.png)


**Services we used when testing:** Check your state Pension forecast, Register to vote

**Changes we made for this version:**
- Service name and navigation links move into the grey section.
- GOV.UK One Login links are in black section of the header.
- We brought back the person icon to help emphasise that the link goes to a personalised space and that the user is signed in
- We renamed one of the labels in the service navigation to make it more specific - from ‘account home’ to ‘personal tax home’ 

| What performed well | What didn’t perform well |
| ------------- | ------------- |
| More participants noticed the header this round than the previous one.  | Some users didn’t know if they were signed in, they thought the GOV.UK One Login link would send them to a place to sign in.  |
| The icon communicated that the link would take them to an account-type space. | Some participants were confused about the separation between the service account and GOV.UK One Login. |
| Most participants understood the difference between the GOV.UK One Login space and the service space. |  |
| Participants understood that the service-level ‘Personal tax home’ link would take them to more information about their tax |  |

&nbsp;  

### 27, 28 February 2023
Desktop:
![Blue banner with text saying 'Signed in as name@digital-cabinet-office.gov.uk' on the right and 'Your GOV.UK One Login' and 'Sign out' links on the right. Below is a black header with GOV.UK crown logo on the left and service name in the centre.](/docs/assets/design-history/6-header-desktop.png)

Mobile: </br>
![Blue banner with text saying 'Signed in as name@digital-cabinet-office.gov.uk' and below an expandable menu link. Below is a black header with GOV.UK crown logo with Service name underneath.](/docs/assets/design-history/6-header-mobile.png)

Context:
![Image of the Check your state Pension forecast service using the service header](/docs/assets/design-history/6-context.png)

**Services we used when testing:** Check your state Pension forecast, Register to vote

**Changes we made for this version:**
- Moved to a banner above all elements of the existing page, to reflect the hierarchy of the accounts and not intervene in the service’s navigation.
- Added ‘Signed in as...’ personalisation to show users they are signed in and with what email address.
- Used ‘Your GOV.UK One Login’ as the content for the link to a user’s login.
- The sign out link is no longer hidden in a dropdown on desktop view.

| What performed well  | What didn’t perform well |
| ------------- | ------------- |
|  Once users had seen their email address, it was clear to them that they were signed in.  |  All participants said they did not see the header.  |
|   |  Participants on mobile were confused about what would be under the Menu.  |
|   |  Some participants mentioned that the menus and placement kept changing.  |
|   |  In previous rounds of testing adding ‘your’ before the product name (Your GOV.UK account) helped users understand the link would go to a personalised space. This didn’t work as well with the new product name (Your GOV.UK One Login). Most participants didn’t know where it would go and some thought it was a link to an informational page.  |
|   |  Participants expected ‘account home’ in the service-level navigation to take them to their GOV.UK One Login details  |

&nbsp;  

### 17, 18 January 2023
Desktop:
![Black header with GOV.UK crown logo on the left, service name in the centre, 'GOV.UK One Login' dropdown link on the right.](/docs/assets/design-history/5-header-desktop.png)

Context: </br>
![Image of the Check your state Pension forecast service using the service header on mobile](/docs/assets/design-history/5-context.png)

**Services we used when testing:** Check your state Pension forecast

**Changes we made for this version:**
- Changed the GOV.UK One Login menu label from ‘settings’ to ‘settings and security’ 

| What performed well  | What didn’t perform well |
| ------------- | ------------- |
|  Users understood what services meant.  |  Confusion about heading links and where they would be taken.  |
|     |  Users found it difficult to see the difference between ‘settings’ in the service navigation menu and ‘settings and security’ in the GOV.UK One Login menu.  |
|     |  Some thought ‘Your services’ takes them to tax related services and not a list of services they have used - so not quite grasping the wider scope of GOV.UK One Login  |
|     |  Some did not notice they were signed in and thought drop down would provide an option for signing in.  |

&nbsp;  

### 25, 26 October 2022 (round 2)
Desktop:
![Black header with GOV.UK crown logo on the left, service name in the centre, 'GOV.UK One Login' dropdown link on the right.](/docs/assets/design-history/4+3-header-desktop.png)

Desktop menu open:
![Black header with GOV.UK crown logo on the left, service name in the centre, 'GOV.UK One Login' dropdown link on the right open revealing a menu with 'Your services', 'Settings' and 'Sign out' links.](/docs/assets/design-history/4-header-desktop-open.png)

Context: </br>
![Image of the Childcare service using the service header on mobile](/docs/assets/design-history/4-context.png)

**Services we used when testing:** The childcare service, Find a lost teacher reference number (TRN)

**Changes we made for this version:**
- Changed ‘Home’ to ‘Your services’.

| What performed well  | What didn’t perform well |
| ------------- | ------------- |
|  Change to ‘Your services’ made sense to users, they expected to see a list of all the services they can use with GOV.UK One Login.  |  Settings label still caused confusion.  |
|  |  Some said they didn’t expect to see ‘Sign out’ in the dropdown, and would have struggled to find it in a real scenario.  |

&nbsp;  

### 11, 12 October 2022 (round 1)
Desktop menu open:
![Image of the desktop version of the service header from 11, 12 October testing, there is a 'GOV.UK One Login' dropdown link on the right open revealing a menu with 'Home', 'Settings' and 'Sign out' links.](/docs/assets/design-history/3-header-desktop-open.png)

**Services we used when testing it:** The childcare service, Find a lost teacher reference number (TRN)

**Changes we made for this version:**
- GOV.UK account name changed to GOV.UK One Login, following the product name change
- Navigation elements changed to omit ‘Account’
- Added a person icon/avatar for GOV.UK One Login
- Added a dropdown menu

| What performed well  | What didn’t perform well |
| ------------- | ------------- |
|  Vast majority saw the GOV.UK One Login link as a single login for accessing government services.  |  There was confusion around where links took users, especially the ‘Home’ link. For example, users expected to be taken to GOV.UK home or the home of the service they were using.  |
|  For the majority of participants the person icon and arrow indicated that the link led to a personalised space.  |  Users struggled to think what would come up if they select ‘settings’.  |
|  Participants thought that if they clicked on the dropdown in the header, they would be able to see things like account information and services they usually use.  |   |

&nbsp;  

### 25, 26 May 2022 (round 2)
Desktop:
![Black header with GOV.UK crown logo on the left, 'Your GOV.UK account' and 'Sign out' links on the right. Grey header below with service name and service links.](/docs/assets/design-history/2-header-desktop.png)

Mobile: </br>
![Black header with GOV.UK crown logo on the left, expandable menu on the right. Grey header below with service name and expandable menu.](/docs/assets/design-history/2-header-mobile.png)

Context:
![Image of the Dart charge service using the service header](/docs/assets/design-history/2-context.png)

**Services we used when testing:** Dart Charge, GOV.UK email subscriptions

**Changes we made for this version:**
- Because of the competing navigation elements, we aligned the service links right to reduce competing attention
- Added ‘Your’ to the GOV.UK account link to help communicate that it takes users to their signed in account space

| What performed well  | What didn’t perform well |
| ------------- | ------------- |
|  It took a while for some users to find ‘Your details’ in the Dart Charge service navigation, but they were more successful than in round 1.  |  There is a clear expectation that participants will be able to see what services they are using with the account. They expect a personalised approach.  |
|  Adding 'Your' to the 'Your GOV.UK account’ link in the header worked better this round, there was a clearer expectation that it would take users to their GOV.UK account space.  |  Some users did not expect the text in the black section to be clickable links.  |

&nbsp;  

### 10, 11 May 2022 (round 1)
Desktop:
![Black header with GOV.UK crown logo on the left, GOV.UK account and sign out links on the right. White header below with service name and service links.](/docs/assets/design-history/1-header-desktop.png)

Mobile: </br>
![Black header with GOV.UK crown logo on the left, expandable menu link on the right. White header below with service name and expandable menu link.](/docs/assets/design-history/1-header-mobile.png)

Context:
![Image of the Dart charge service using the service header](/docs/assets/design-history/1-context.png)

**Services we used when testing:** Dart Charge, GOV.UK email subscriptions

A part of the research was testing x-service navigation design and some simple design patterns to address potential challenges for services adopting GOV.UK sign in.   

The aim was to explore the mental model of having service settings versus GOV.UK account settings and how users navigate to making changes to their credentials.

| What performed well  | What didn’t perform well |
| ------------- | ------------- |
|  Some participants found what they’d expected to from clicking the ‘GOV.UK account’ link - (for others not)  |  One user articulated an expectation of looking for ‘My account’ rather than ‘GOV.UK account’ in order to know it was theirs.  |
|  |  The header was not seen or interacted with by many users. It was competing with other navigation elements such as the left-hand side navigation in the Dart Charge service. This led to confusion for the participants.  |
|  |  None of the participants seemed to understand that the GOV.UK account and the Dart charge account are two different but linked spaces - many were surprised when they were told they could reuse their account.  |

&nbsp;  

## Other insights from testing

### Showing the header on every page in a service did not interrupt the journey

We included the GOV.UK One Login service header on every page of the services we used in testing. We found that none of the participants noticed the header as they were focused on the task of using the service. 

We asked participants what they would expect if they left the service part-way through by navigating to their GOV.UK One Login using the header. Feedback from users suggests it’s not something they would usually do unless there was an option to save their progress.  
You can help set the right expectations by clearly showing when a user can save their progress to continue later.

### The navigation label ‘settings’ did not always match user expectations

Our research found that some users struggled to understand why there were 2 ‘settings’ links.  For example ‘settings’ in the service menu and ‘settings and security’ in their GOV.UK One Login menu. Users had different expectations of what might be on a ‘settings’ page with some thinking it might be related to site and accessibility settings. 
