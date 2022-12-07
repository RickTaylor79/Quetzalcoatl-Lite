namespace project
{

struct mod2_networkdata: public scriptnode::dll::InterpretedNetworkData
{
	String getId() const override
	{
		return "mod2";
	}
	bool isModNode() const override
	{
		return false;
	}
	String getNetworkData() const override
	{
		return "1831.nT6K8CVStzNN.X3redBvVTM.TjKtXoY0gtelrnHISehUvkASXUitsD1lpCwhQH9WYccPxOPj.PI.UBfWWktgtCW2aeWGth86IOCgaaWCwwc4CxNG4BxCnAeQ0c98v4MVldOr8Oo6gGHyZJ2DdA.Fpz5EJP.QtqAPm+8em44lPXNNNErRjSesd58QgysMk+t5b2g2fHD4b64luLduMwvRj+TrGQQdDVIx2pcXNuOKdSHr0NgOQACHx6vUc9GwkT7EJE4VrQkH+SFGZ+dD3Nlr3bC6YFPo76wSMuE.dcRFTEud91GDMHNPLWYWWZZlnhQnBeys2BX.TKVCnj61+jmCBnlhPnE2+rM26I7JY0kzBKlgE0foQKz+giGwhQJMq3BoT438aNTTTQHFTlc3vtZGRQNlH2cH8ozuj6EdTBnkHGkm1oyuIl.hhuo0SWsXtmVfxa8t3Jb2ivKd7sd7f2c1fVoRuI+zpkiTFMcyy29sq4oEuAlQhYEiYWVxLKLJsL4EzsJcvNO2b7vXNjPLUhe1ldcPYd6tHfr.GfDrD2ZbM+a7tyLT5VCg9ch.K3hsjY2EPL4uNfrJZIhxBkNAD9Y8paKnNfYjxBYq6S2A6c+MAXQnTTz75AgUl9r2wNKAa8.GXgLtVJwddwaPS3aTIf8q+LLyzBhFtl10Dkz29HPkVULKSSLZ+rInXwbYWQKMpJqozEsEtNsk2jCKC6xBKSSNggUkYUQowxZpBp.ci4f.D+9O4J0euusGou0OEyklrnz5RCKS0E00.9kXllKMZVDLu2omKIllLsL9amaUSW90cGhx3oqxgRmd2IHPjmeWkCnzCdcnO2FiuZ3BRoTVgZwXXoBsOplhvjIKLHIwA9NpwWSlYDA....RHDF..fXPHTBsCHIfTTr.P.n.zHHTDfQfQ.PQPBM.A.i.ALGXFh3DB3vJb9HBD63WUbT4lsezdzFUQMYSQhRJF8yMWZRCh4MullGqWMNRkoau4syJNuA8DiVA6kO.R7uRAJ.U.DYZvSumNHUIGcJrjJdceaiqN86WhlKUkH7LY2v8Inlk04edPpOZYlgWGsp1VnvpzDgsCeaYM3lDPLSkgUj2h0UHI.uhle6RduqxoLzOLnKjn0OMouIAXhOUqChNcoyQRP+v1on.5OLa8KKYP1LMUyQ140mZIm.8nqOS9dR6ZILOLz0Kn7BZnx5JAB+ClvAMV2nmGruNfS.DKIhzlEeZLO2TifZTHOluORlORdDY6nPKUtekZ5fxrECV0pTbHjxPLfkd2OSES0HqMDWmJ410.6Il60RGfZD.Hmzt3qaNHPJfRD4YkhwHEPHZqaf2MCYlIMdkufQA+RItEVskTiY3xfjDSZxvCghcyA5WnZsk4mbSadT3vi9dALSLwgucLTrp9OHKTYvjxdTiD3gz7q5k7pREQqm4Hlu2AogclImJrx9.MRbTaIDkeE3xHcj0s8ZEoEsLjeB19iCDAZ4GIgXFl+nmzemgSjZmEOx+MMgFTIyLtyzWZkTcDQzGs6QKj69zocvh31Gaw+Nzj8ohf5BYg.wuo80lbRBTtCQAnud1AA8uj.ZwqnxDv6mSFWrPUqCoA3q1hNG93BfQtUGsdItrDIN6suP+W00p4q3cZIq9X2t8t5q1n1+cQ8DzCoBjeXGJ24fFb0rkncMFoxPQJGt3.3rIHeETZZaTYDGhqDMHnE1WwBAQ278hTrbTfhoqZ0RhnFiLGREz.3AI1Uy5d+aY8sLfvyD1HExhA14QID3i1nXUs.sjK8F9P33KYfEVHUxOkkSD9ckSMD8QR2vyIegdH5wJc.2ByTM7w2lg8xDOYJ9hWqeq.XaAVwC5agf0N.9EGCri8s3K8jSfBOJO.l6LD2CgVnq5GtubHbFL9aX0OlcQ8b2GmwSfc2dYuN2DlVoftFIB8n8jtzQCnB2Hk.bU34bwir5MQZwPsZq6e1.LBaPwA0X53dPU4F1UJr9Ox6KkbNFRAlUTGZmx908pBv3CytCYIMZpf6l5X2TIpDyipRUwChJoTT1hjSKqa1M4bDPG9GLdOfw8XtQfTvaAPwHFjCd8XO9gexncgzmOXnpZugPEY7CwkR7a4vGFSMbFVODP9Ix62BSZQhwU0+4X1SgxJWPIFmxmk1.Cc8rrGAMCLBWEM1gNFz54ONhialfm6KtwkMgu.7Jbjb7hrAGEcR+ykyoDDHFgvaHrLMCgNFr5loTcG1vRPE+Ey6NuRMdmd4y3qHAr5j0i+lHhvNRh8i8w7VJzgiTJ7qkmppw7ux35EV7pnV9LhkZdlRPwGczrDePEmKHASYRAk3gTlmjefVc2qlVrDCXJH8p38YdC8BvAQ38tIWWI+Wu857b1NH0Ju+4jgb2YPQt3Y8kZW3wXbGUpp6q2yKxDBEw+pSsAhPge5kGfkUUmiI8PI1SEIWaPDiciIFv1TtWnQWONqv3SG.";
	}
};
}
